# API Contracts - Rubeena P Portfolio

## Overview
This document defines the API contracts for the portfolio website backend integration. The frontend currently uses mock data and needs backend endpoints for contact form functionality.

## Current Mock Data Location
- **File**: `/app/frontend/src/data/mock.js`
- **Purpose**: Contains all portfolio data (personal info, experience, projects, skills, education, etc.)

## Backend Requirements

### 1. Contact Form API

**Endpoint**: `POST /api/contact`

**Purpose**: Handle contact form submissions from the portfolio website

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email format)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response Success (200)**:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "submission_id"
}
```

**Response Error (400)**:
```json
{
  "success": false,
  "error": "Validation error message"
}
```

### 2. Database Schema

**Collection**: `contact_messages`

**Document Structure**:
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string",
  "submitted_at": "DateTime",
  "ip_address": "string (optional)",
  "status": "string (new|read|replied)"
}
```

## Frontend Integration Points

### 1. Contact Form Component
- **File**: `/app/frontend/src/components/Portfolio/ContactSection.jsx`
- **Current Mock**: Form currently shows success toast after 1.5 seconds
- **Integration**: Replace mock submission with actual API call to `/api/contact`

### 2. API Configuration
- **Backend URL**: Use `process.env.REACT_APP_BACKEND_URL` from frontend `.env`
- **API Base**: `${BACKEND_URL}/api`

## Implementation Steps

1. **Backend Setup**:
   - Create contact message model in `/app/backend/server.py`
   - Add POST `/api/contact` endpoint with validation
   - Implement database storage using MongoDB
   - Add proper error handling

2. **Frontend Integration**:
   - Remove mock submission logic from `ContactSection.jsx`
   - Add API call using axios to backend endpoint
   - Handle success/error responses with toast notifications
   - Add loading states during submission

3. **Validation**:
   - Backend: Pydantic models for request validation
   - Frontend: Form validation before submission
   - Email format validation on both ends

## Security Considerations
- Rate limiting for contact form submissions
- Input sanitization and validation
- CORS configuration for frontend access
- Optional: Basic spam protection (honeypot fields)

## Testing Requirements
- Test contact form submission end-to-end
- Validate all error scenarios (invalid email, missing fields, etc.)
- Verify database storage of contact messages
- Test frontend error handling and user feedback