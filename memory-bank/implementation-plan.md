# **Implementation Plan (MVP) \- Smart Hospital Management System**

Version: 1.0

Date: 2025-04-11

Focus: Minimum Viable Product (MVP) \- Core Admin, Patient, and Doctor functionalities.

**Goal:** To implement the foundational elements of the system, allowing an admin to manage basic patient and doctor data, a patient to book an appointment, and a doctor to view their appointments.

**Target Audience:** Development Team

**General Notes:**

* Follow the rules defined in the "Dokumen Aturan Pengembangan".  
* Prioritize functionality over perfect UI/UX for this MVP phase.  
* Use placeholder data or simple logic where complex features (e.g., real authentication, complex scheduling) are deferred.  
* No actual code is included here; these are instructions and validation steps.

## **Phase 1: Setup & Foundational Backend (Node.js/Express \+ PostgreSQL)**

**Objective:** Establish the basic backend project structure, database connection, and core data models.

1. **Initialize Backend Project Structure**  
   * **Instruction:** Set up a new Node.js project using npm init. Install core dependencies: express, pg, sequelize, dotenv, bcrypt. Configure a basic folder structure (src/, src/config/, src/models/, src/controllers/, src/routes/, src/services/). Initialize a Git repository. Create the main server entry point (index.js or server.js).  
   * **Test:** Run the server start script (e.g., npm start). Verify the Express server starts without errors and listens on the configured port (e.g., 3001\) by accessing http://localhost:3001 in a browser or using curl.  
2. **Configure Database Connection**  
   * **Instruction:** Create a .env file based on a .env.example. Add PostgreSQL connection variables (DB\_HOST, DB\_PORT, DB\_USER, DB\_PASSWORD, DB\_NAME). Implement a database configuration module (src/config/database.js) using Sequelize that reads from .env. Add a function to test the connection.  
   * **Test:** Run the connection test function (e.g., via a dedicated script npm run test-db-connection). Verify a "Database connection successful" message is logged to the console.  
3. **Define Core Data Models**  
   * **Instruction:** Using Sequelize, define models in src/models/ for:  
     * User (id, username, password\_hash, role ENUM('admin', 'doctor', 'patient'))  
     * Patient (id, user\_id FK nullable, full\_name, date\_of\_birth)  
     * Doctor (id, user\_id FK nullable, full\_name, specialization)  
     * Appointment (id, patient\_id FK, doctor\_id FK, appointment\_time DATETIME, status ENUM('booked', 'completed', 'cancelled') \- default 'booked')  
       Establish basic associations (e.g., Appointment.belongsTo(Patient), Appointment.belongsTo(Doctor)).  
   * **Test:** Run the Sequelize synchronization function (sequelize.sync({ force: true }) for initial setup, then likely alter: true or migrations later). Verify that the Users, Patients, Doctors, and Appointments tables are created correctly in the PostgreSQL database using a tool like pgAdmin or DBeaver. Check that foreign key constraints exist where expected.  
4. **Implement User Seeding (Admin)**  
   * **Instruction:** Create a seeding script (e.g., using Sequelize CLI seeders or a custom script) to insert one initial admin user into the Users table. Ensure the password is hashed using bcrypt before insertion. Assign the 'admin' role.  
   * **Test:** Run the seeding script. Query the Users table directly in the database. Verify the admin user exists with the correct username, a hashed password (not plain text), and the 'admin' role.

## **Phase 2: Core Web App (Admin \- React)**

**Objective:** Implement the basic admin interface for login and managing patients/doctors.

1. **Initialize Frontend Project Structure**  
   * **Instruction:** Set up a new React project using Vite (npm create vite@latest my-admin-app \-- \--template react). Install core dependencies: axios, react-router-dom. Configure a basic folder structure (src/, src/components/, src/pages/, src/services/, src/contexts/). Initialize a Git repository.  
   * **Test:** Run the development server (npm run dev). Verify the default React app loads in the browser at the specified URL (e.g., http://localhost:5173) without errors.  
2. **Implement Basic Admin Login UI & Routing**  
   * **Instruction:** Create a LoginPage component with uncontrolled input fields for username/password and a submit button. Set up basic routing using react-router-dom with a public route for /login and a placeholder private route /admin/dashboard (no auth guard yet).  
   * **Test:** Start the app. Navigate to /login. Verify the login form renders. Manually navigate to /admin/dashboard. Verify the placeholder dashboard component renders (it shouldn't be blocked yet).  
3. **Implement Admin Login API Endpoint (Backend)**  
   * **Instruction:** Create a POST endpoint /api/auth/login in the Express backend. It should receive username and password. Find the user by username. If found and role is 'admin', compare the provided password with the stored hash using bcrypt.compare. Return a success (e.g., status 200, { message: "Login successful" }) or failure (e.g., status 401, { message: "Invalid credentials" }) JSON response. (No JWT token generation yet).  
   * **Test:** Use Postman or curl to send POST requests to /api/auth/login with: a) correct admin credentials, b) incorrect password, c) non-existent username. Verify the expected status codes (200 for success, 401 for failure) and JSON responses.  
4. **Connect Frontend Login to Backend API**  
   * **Instruction:** In the LoginPage component, implement the onSubmit handler. Use axios to call the /api/auth/login endpoint. On successful response (status 200), navigate the user to /admin/dashboard. On failure, display a simple error message below the form.  
   * **Test:** Run both backend and frontend servers. Use the React app's login form: a) Log in with correct admin credentials. Verify navigation to /admin/dashboard. b) Attempt login with incorrect credentials. Verify an error message appears and navigation does not occur.  
5. **Implement Patient List Page (Admin)**  
   * **Instruction:** Create an AdminPatientListPage component accessible via routing (e.g., /admin/patients). Implement a basic table structure (columns: Full Name, Date of Birth). Add a button/link "Add New Patient".  
   * **Test:** Navigate to /admin/patients in the React app. Verify the page structure (table headers, add button) renders correctly.  
6. **Implement "Get Patients" API Endpoint (Backend)**  
   * **Instruction:** Create a GET endpoint /api/patients in the Express backend. Use the Sequelize Patient model to find all patient records. Return the results as a JSON array.  
   * **Test:** Use Postman or curl to send a GET request to /api/patients. Verify it returns status 200 and a JSON array (empty if no patients exist yet).  
7. **Display Patients in Frontend Table**  
   * **Instruction:** In AdminPatientListPage, use useEffect and axios to call the /api/patients endpoint when the component mounts. Store the fetched patient data in state. Render the patient data in the table rows.  
   * **Test:** Manually add 1-2 patients directly into the database Patients table. Refresh the /admin/patients page in the React app. Verify the patient data is displayed correctly in the table.  
8. **Implement "Add Patient" Page & Form UI (Admin)**  
   * **Instruction:** Create an AdminAddPatientPage component accessible via routing (e.g., /admin/patients/add). Implement a form with input fields for Full Name and Date of Birth, and a Submit button.  
   * **Test:** Navigate from the patient list page (using the "Add New Patient" button) to /admin/patients/add. Verify the form renders correctly.  
9. **Implement "Create Patient" API Endpoint (Backend)**  
   * **Instruction:** Create a POST endpoint /api/patients in the Express backend. It should receive full\_name and date\_of\_birth in the request body. Use the Sequelize Patient model to create a new record. Return status 201 and the created patient object on success, or an error status (e.g., 400\) on validation failure.  
   * **Test:** Use Postman or curl to send a POST request to /api/patients with valid data. Verify status 201 is returned and the response body contains the new patient data. Check the Patients table in the database to confirm creation. Send invalid data (e.g., missing name) and verify a 400-level error.  
10. **Connect "Add Patient" Form to Backend API**  
    * **Instruction:** In AdminAddPatientPage, implement the onSubmit handler. Use axios to call the /api/patients POST endpoint with the form data. On success (status 201), navigate the user back to the patient list page (/admin/patients). Display errors if the API call fails.  
    * **Test:** Use the React app to navigate to the add patient form, fill it out, and submit. Verify successful navigation back to the patient list. Verify the newly added patient appears in the list.  
11. **Implement Doctor Management (List & Add)**  
    * **Instruction:** Repeat steps 5-10 for Doctors. Create AdminDoctorListPage, AdminAddDoctorPage. Use fields full\_name, specialization. Create backend endpoints GET /api/doctors and POST /api/doctors. Connect the React components to these endpoints.  
    * **Test:** Perform analogous tests as for Patients: Verify doctor list page renders, displays data fetched from the API, navigation to add doctor form works, submitting the form calls the POST API, the new doctor appears in the list.

## **Phase 3: Core Mobile App (Patient \- Flutter)**

**Objective:** Implement the basic patient mobile interface for viewing doctors and booking an appointment.

1. **Initialize Flutter Project**  
   * **Instruction:** Create a new Flutter project (flutter create smart\_hospital\_mobile). Add dependencies: http, provider (or other state management). Configure basic folder structure (lib/, lib/screens/, lib/widgets/, lib/services/, lib/providers/). Initialize Git repository.  
   * **Test:** Run the default Flutter app on an emulator or physical device (flutter run). Verify the counter app runs without errors.  
2. **Implement Patient Login Placeholder & Navigation**  
   * **Instruction:** Create a PatientLoginPage screen. For MVP, add a simple "Login as Patient" button. On tap, navigate to a PatientHomePage screen. Use a simple state management approach (like Provider) to hold a placeholder patientId (e.g., 1) globally after "login".  
   * **Test:** Launch the app. Tap the "Login as Patient" button. Verify navigation to PatientHomePage. Verify the placeholder patientId is accessible in the state management provider.  
3. **Implement View Doctors Screen**  
   * **Instruction:** Create a PatientViewDoctorsPage screen accessible from PatientHomePage. Implement a basic UI structure to display a list (e.g., using ListView.builder). Each list item should show Doctor Name and Specialization, and be tappable for booking.  
   * **Test:** Navigate from PatientHomePage to PatientViewDoctorsPage. Verify the basic screen structure (e.g., AppBar, placeholder for list) renders.  
4. **Implement "Get Doctors" Service & Provider (Flutter)**  
   * **Instruction:** Create an ApiService class with a method fetchDoctors() that calls the backend GET /api/doctors endpoint using the http package. Parse the JSON response into a List\<Doctor\>. Create a DoctorProvider using provider to manage the state (loading, list of doctors, error). Call fetchDoctors() when the provider is initialized or when the View Doctors screen loads.  
   * **Test:** In the DoctorProvider or the screen's initState, call the fetch method. Print the fetched doctors or loading/error state to the console. Verify the data matches the doctors added via the Admin Web App.  
5. **Display Doctors in Flutter UI**  
   * **Instruction:** In PatientViewDoctorsPage, use Consumer\<DoctorProvider\> to listen for state changes. Display a loading indicator while fetching. Display the list of doctors using the data from the provider. Display an error message if fetching fails.  
   * **Test:** Launch the app, log in as patient, navigate to View Doctors. Verify a loading indicator shows briefly, then the list of doctors (added via Admin Web App) is displayed correctly.  
6. **Implement "Book Appointment" API Endpoint (Backend)**  
   * **Instruction:** Create a POST endpoint /api/appointments in the Express backend. It should accept patient\_id, doctor\_id, and appointment\_time in the request body. Validate the inputs. Create a new record in the Appointments table with status 'booked'. Return status 201 and the created appointment object on success.  
   * **Test:** Use Postman or curl to send a POST request to /api/appointments with valid patient\_id, doctor\_id, and a future appointment\_time. Verify status 201 and check the database Appointments table. Test with invalid data (e.g., non-existent patientId) and verify appropriate error responses.  
7. **Implement "Book Appointment" Action (Flutter)**  
   * **Instruction:** When a doctor list item is tapped in PatientViewDoctorsPage, show a simple confirmation dialog or navigate to a basic booking confirmation screen. Implement a function (e.g., in ApiService or AppointmentProvider) bookAppointment(doctorId, appointmentTime) that calls the backend POST /api/appointments endpoint. Use the globally stored patientId and the selected doctorId. For MVP, use a fixed future time slot (e.g., tomorrow at 10:00 AM). Show a success message (e.g., using SnackBar) or error message based on the API response.  
   * **Test:** In the patient app, tap on a doctor in the list. Confirm the booking action. Verify a success SnackBar appears. Check the Appointments table in the database to confirm the new record was created with the correct patient\_id, doctor\_id, appointment\_time, and status 'booked'.

## **Phase 4: Core Mobile App (Doctor \- Flutter)\*\***

**Objective:** Implement the basic doctor mobile interface for viewing assigned appointments.

1. **Implement Doctor Login Placeholder & Navigation**  
   * **Instruction:** Create a DoctorLoginPage screen. Add a "Login as Doctor" button. On tap, navigate to DoctorHomePage. Use state management to hold a placeholder doctorId (e.g., 1). *Note: This assumes a separate app flow or entry point for simplicity in MVP. Code could potentially be shared later.*  
   * **Test:** Launch the doctor app flow. Tap the "Login as Doctor" button. Verify navigation to DoctorHomePage. Verify the placeholder doctorId is accessible.  
2. **Implement View Appointments Screen**  
   * **Instruction:** Create a DoctorViewAppointmentsPage screen accessible from DoctorHomePage. Implement a basic UI structure to display a list (e.g., ListView.builder). Each item should show Patient Name and Appointment Time.  
   * **Test:** Navigate from DoctorHomePage to DoctorViewAppointmentsPage. Verify the basic screen structure renders.  
3. **Implement "Get Doctor Appointments" API Endpoint (Backend)**  
   * **Instruction:** Create a GET endpoint /api/doctors/:doctorId/appointments in the Express backend. Retrieve the doctorId from the URL parameters. Use Sequelize to find all appointments for that doctor, joining with the Patients table to include patient.full\_name. Return the results as a JSON array.  
   * **Test:** Book several appointments for the placeholder doctor (e.g., doctorId 1\) using the Patient App. Use Postman or curl to send a GET request to /api/doctors/1/appointments. Verify status 200 and that the JSON response contains the correct appointment details, including patient names.  
4. **Implement "Get Appointments" Service & Provider (Flutter \- Doctor Flow)**  
   * **Instruction:** Similar to the patient flow, create/update ApiService with fetchDoctorAppointments(doctorId). Create an AppointmentProvider (or reuse/adapt if code is shared) to manage state (loading, list of appointments, error). Call the fetch method using the globally stored doctorId.  
   * **Test:** In the doctor flow, trigger the fetch method. Print the fetched appointments or state to the console. Verify the data matches the appointments booked for that doctor.  
5. **Display Appointments in Flutter UI (Doctor Flow)**  
   * **Instruction:** In DoctorViewAppointmentsPage, use Consumer\<AppointmentProvider\> to listen for state. Display loading/error states. Display the list of appointments (Patient Name, Time) using data from the provider.  
   * **Test:** Launch the doctor app flow, log in, navigate to View Appointments. Verify loading shows, then the list of appointments booked for this doctor (via the Patient App) is displayed correctly.

## **Phase 5: Basic Integration Testing & Cleanup**

**Objective:** Ensure basic end-to-end flows work and clean up the MVP codebase.

1. **End-to-End Test: Admin Adds Doctor \-\> Patient Books \-\> Doctor Views**  
   * **Instruction:** Perform the following sequence manually:  
     1. Use Admin Web App: Log in, add a new Doctor.  
     2. Use Patient Mobile App: Log in, view doctors (verify new doctor appears), book an appointment with the new doctor.  
     3. Use Doctor Mobile App: Log in (as the new doctor \- requires manually setting placeholder ID or a temporary way to select), view appointments.  
   * **Test:** Verify the appointment booked by the patient appears correctly in the doctor's appointment list in the mobile app.  
2. **API Consistency Review**  
   * **Instruction:** Review all created backend API endpoints. Ensure consistent URL naming conventions, request/response JSON structures, and HTTP status code usage. Refactor slightly if major inconsistencies are found.  
   * **Test:** Document the final MVP API endpoints (URL, Method, Request Body, Success Response, Error Response) in a simple list or using Postman collection export. Verify documentation matches implementation.  
3. **Basic Error Handling Review (UI)**  
   * **Instruction:** Briefly review the React and Flutter apps. Ensure that basic error messages are shown to the user when API calls fail (e.g., network error, backend error response) instead of crashing or showing raw errors.  
   * **Test:** Stop the backend server. Try to log in or fetch data from the React and Flutter apps. Verify user-friendly error messages (e.g., "Failed to connect to server", "Could not load data") are displayed.  
4. **Code Cleanup & README Update**  
   * **Instruction:** Remove unnecessary console.log / print statements. Add basic comments explaining non-obvious code sections. Update the README.md file in each repository (backend, admin-web, mobile) with clear, concise instructions on how to set up the development environment, configure .env files, install dependencies, and run the application for the MVP.  
   * **Test:** Ask another developer (or yourself, acting fresh) to follow the README instructions exactly for each repository on a clean machine/environment. Verify they can successfully set up and run the backend, admin web app, and mobile app.

**End of MVP Implementation Plan**

