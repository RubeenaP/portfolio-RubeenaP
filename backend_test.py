#!/usr/bin/env python3
"""
Backend API Testing Suite for Portfolio Website
Tests all backend endpoints including contact form functionality
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from environment
BACKEND_URL = "https://93455c06-2624-4cf3-b535-4a750fb60473.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.session = requests.Session()
        
    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "timestamp": datetime.now().isoformat(),
            "details": details
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if details and not success:
            print(f"   Details: {details}")
    
    def test_hello_world(self):
        """Test GET /api/ endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/")
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("GET /api/", True, "Hello World endpoint working correctly")
                    return True
                else:
                    self.log_test("GET /api/", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("GET /api/", False, f"HTTP {response.status_code}: {response.text}")
                return False
        except Exception as e:
            self.log_test("GET /api/", False, f"Request failed: {str(e)}")
            return False
    
    def test_status_endpoints(self):
        """Test status check endpoints"""
        success_count = 0
        
        # Test POST /api/status
        try:
            test_data = {"client_name": "Portfolio Test Client"}
            response = self.session.post(f"{self.base_url}/status", json=test_data)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "client_name" in data and "timestamp" in data:
                    self.log_test("POST /api/status", True, "Status creation working correctly")
                    success_count += 1
                else:
                    self.log_test("POST /api/status", False, f"Missing required fields in response: {data}")
            else:
                self.log_test("POST /api/status", False, f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("POST /api/status", False, f"Request failed: {str(e)}")
        
        # Test GET /api/status
        try:
            response = self.session.get(f"{self.base_url}/status")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /api/status", True, f"Status retrieval working, found {len(data)} records")
                    success_count += 1
                else:
                    self.log_test("GET /api/status", False, f"Expected list, got: {type(data)}")
            else:
                self.log_test("GET /api/status", False, f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("GET /api/status", False, f"Request failed: {str(e)}")
        
        return success_count == 2
    
    def test_contact_form_valid_data(self):
        """Test POST /api/contact with valid data"""
        try:
            test_data = {
                "name": "John Smith",
                "email": "john.smith@example.com",
                "subject": "Portfolio Inquiry",
                "message": "Hello, I'm interested in your portfolio and would like to discuss potential collaboration opportunities."
            }
            
            response = self.session.post(f"{self.base_url}/contact", json=test_data)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "id" in data and data.get("message"):
                    self.log_test("POST /api/contact (valid data)", True, "Contact form submission working correctly")
                    return True, data.get("id")
                else:
                    self.log_test("POST /api/contact (valid data)", False, f"Invalid response structure: {data}")
                    return False, None
            else:
                self.log_test("POST /api/contact (valid data)", False, f"HTTP {response.status_code}: {response.text}")
                return False, None
        except Exception as e:
            self.log_test("POST /api/contact (valid data)", False, f"Request failed: {str(e)}")
            return False, None
    
    def test_contact_form_validation(self):
        """Test POST /api/contact validation scenarios"""
        validation_tests = [
            {
                "name": "Missing name field",
                "data": {
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "This is a test message with enough characters."
                },
                "expected_status": 422
            },
            {
                "name": "Missing email field",
                "data": {
                    "name": "Test User",
                    "subject": "Test Subject",
                    "message": "This is a test message with enough characters."
                },
                "expected_status": 422
            },
            {
                "name": "Invalid email format",
                "data": {
                    "name": "Test User",
                    "email": "invalid-email",
                    "subject": "Test Subject",
                    "message": "This is a test message with enough characters."
                },
                "expected_status": 422
            },
            {
                "name": "Missing subject field",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "message": "This is a test message with enough characters."
                },
                "expected_status": 422
            },
            {
                "name": "Missing message field",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "Test Subject"
                },
                "expected_status": 422
            },
            {
                "name": "Message too short (less than 10 characters)",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "subject": "Test Subject",
                    "message": "Short"
                },
                "expected_status": 422
            }
        ]
        
        success_count = 0
        for test in validation_tests:
            try:
                response = self.session.post(f"{self.base_url}/contact", json=test["data"])
                
                if response.status_code == test["expected_status"]:
                    self.log_test(f"Contact validation: {test['name']}", True, f"Correctly rejected with status {response.status_code}")
                    success_count += 1
                else:
                    self.log_test(f"Contact validation: {test['name']}", False, f"Expected status {test['expected_status']}, got {response.status_code}")
            except Exception as e:
                self.log_test(f"Contact validation: {test['name']}", False, f"Request failed: {str(e)}")
        
        return success_count == len(validation_tests)
    
    def test_contact_messages_retrieval(self):
        """Test GET /api/contact endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/contact")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    # Check if we have at least one message (from our previous test)
                    if len(data) > 0:
                        # Verify structure of first message
                        message = data[0]
                        required_fields = ["id", "name", "email", "subject", "message", "submitted_at", "status"]
                        missing_fields = [field for field in required_fields if field not in message]
                        
                        if not missing_fields:
                            self.log_test("GET /api/contact", True, f"Contact messages retrieval working, found {len(data)} messages")
                            return True
                        else:
                            self.log_test("GET /api/contact", False, f"Missing fields in message structure: {missing_fields}")
                            return False
                    else:
                        self.log_test("GET /api/contact", True, "Contact messages retrieval working (no messages found)")
                        return True
                else:
                    self.log_test("GET /api/contact", False, f"Expected list, got: {type(data)}")
                    return False
            else:
                self.log_test("GET /api/contact", False, f"HTTP {response.status_code}: {response.text}")
                return False
        except Exception as e:
            self.log_test("GET /api/contact", False, f"Request failed: {str(e)}")
            return False
    
    def test_mongodb_storage(self, contact_id):
        """Verify that contact message was stored in MongoDB by retrieving it"""
        if not contact_id:
            self.log_test("MongoDB storage verification", False, "No contact ID available for verification")
            return False
        
        try:
            # Get all contact messages and look for our test message
            response = self.session.get(f"{self.base_url}/contact")
            
            if response.status_code == 200:
                messages = response.json()
                found_message = None
                
                for message in messages:
                    if message.get("id") == contact_id:
                        found_message = message
                        break
                
                if found_message:
                    # Verify all expected fields are present
                    expected_fields = ["id", "name", "email", "subject", "message", "submitted_at", "ip_address", "status"]
                    missing_fields = [field for field in expected_fields if field not in found_message]
                    
                    if not missing_fields:
                        self.log_test("MongoDB storage verification", True, "Contact message successfully stored and retrieved from MongoDB")
                        return True
                    else:
                        self.log_test("MongoDB storage verification", False, f"Stored message missing fields: {missing_fields}")
                        return False
                else:
                    self.log_test("MongoDB storage verification", False, f"Contact message with ID {contact_id} not found in database")
                    return False
            else:
                self.log_test("MongoDB storage verification", False, f"Failed to retrieve messages: HTTP {response.status_code}")
                return False
        except Exception as e:
            self.log_test("MongoDB storage verification", False, f"Verification failed: {str(e)}")
            return False
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests for Portfolio Website")
        print(f"📍 Testing against: {self.base_url}")
        print("=" * 80)
        
        # Test basic endpoints
        hello_success = self.test_hello_world()
        status_success = self.test_status_endpoints()
        
        # Test contact form functionality
        contact_success, contact_id = self.test_contact_form_valid_data()
        validation_success = self.test_contact_form_validation()
        retrieval_success = self.test_contact_messages_retrieval()
        storage_success = self.test_mongodb_storage(contact_id)
        
        print("=" * 80)
        print("📊 TEST SUMMARY:")
        
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results if result["success"])
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {total_tests - passed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        # Critical functionality check
        critical_tests = [hello_success, contact_success, retrieval_success, storage_success]
        critical_passed = sum(critical_tests)
        
        print(f"\n🎯 CRITICAL FUNCTIONALITY:")
        print(f"✅ Basic API: {'WORKING' if hello_success else 'FAILED'}")
        print(f"✅ Contact Form Submission: {'WORKING' if contact_success else 'FAILED'}")
        print(f"✅ Contact Messages Retrieval: {'WORKING' if retrieval_success else 'FAILED'}")
        print(f"✅ MongoDB Storage: {'WORKING' if storage_success else 'FAILED'}")
        print(f"✅ Status Endpoints: {'WORKING' if status_success else 'FAILED'}")
        print(f"✅ Form Validation: {'WORKING' if validation_success else 'FAILED'}")
        
        # Overall assessment
        if critical_passed == len(critical_tests):
            print(f"\n🎉 OVERALL STATUS: ALL CRITICAL FUNCTIONALITY WORKING")
            return True
        else:
            print(f"\n⚠️  OVERALL STATUS: {len(critical_tests) - critical_passed} CRITICAL ISSUES FOUND")
            return False

def main():
    """Main test execution"""
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Return appropriate exit code
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()