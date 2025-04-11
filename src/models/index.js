const { sequelize } = require('../config/database');
const User = require('./user.model');
const Patient = require('./patient.model');
const Doctor = require('./doctor.model');
const Appointment = require('./appointment.model');

// Define associations
Patient.belongsTo(User, { foreignKey: 'user_id' });
Doctor.belongsTo(User, { foreignKey: 'user_id' });

Appointment.belongsTo(Patient, { foreignKey: 'patient_id' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctor_id' });

Patient.hasMany(Appointment, { foreignKey: 'patient_id' });
Doctor.hasMany(Appointment, { foreignKey: 'doctor_id' });

module.exports = {
  sequelize,
  User,
  Patient,
  Doctor,
  Appointment
};