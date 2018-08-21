// Basic inputs for profile edit
const profileInputs = [
    {
        value: 'documentType', label: 'Tipo de documento', type: 'select', disabled: true,
        options: [
            { value: 'CC', label: 'Cédula de ciudadania' },
            { value: 'CE', label: 'Cédula de extranjería' },
            { value: 'TI', label: 'Tarjeta de identidad' },
            { value: 'NIT', label: 'NIT' }
        ]
    },
    { value: 'documentNumber', label: 'Número de documento', type: 'text', disabled: true, numeric: true },
    { value: 'displayName', label: 'Nombre de usuario', type: 'text' },
    { value: 'email', label: 'Correo', type: 'text' },
    { value: 'phoneNumber', label: 'Teléfono', type: 'text', numeric: true },
    { value: 'idNetwork', label: 'ID de Red', type: 'text', disabled: true },
    { value: 'firstName', label: 'Nombre', type: 'text', disabled: true },
    { value: 'lastName', label: 'Apellido', type: 'text', disabled: true },
    { value: 'bornDate', label: 'Fecha de nacimiento', type: 'date', disabled: true },
    { value: 'bornCity', label: 'Ciudad de nacimiento', type: 'text', disabled: true },
    { value: 'bornState', label: 'Estado de nacimiento', type: 'text', disabled: true },
    { value: 'height', label: 'Altura', type: 'text', disabled: true },
    { value: 'bloodType', label: 'Tipo de sangre', type: 'text', disabled: true },
    {
        value: 'gender', label: 'Género', type: 'select', disabled: true,
        options: [
            { label: 'Masculino', value: 'M' },
            { label: 'Femenino', value: 'F' },
            { label: 'Idefinido', value: 'I' }
        ]
    },
];
// Social inputs for edit profile
const socialInputs = [
    { value: 'social.maritalStatus', type: 'text', label: 'Estado civil' },
    { value: 'social.children', type: 'text', label: 'Hijos', numeric: true },
    { value: 'social.dependents', type: 'text', label: 'Personas a cargo', numeric: true },
    { value: 'social.housingClass', type: 'text', label: 'Tipo de vivienda' },
    { value: 'social.housingTime', type: 'date', label: 'Tiempo de alojamiento' },
    { value: 'social.dataPlan', type: 'checkbox', label: 'Plan de datos' },
    { value: 'social.sisben', type: 'checkbox', label: 'Sisben' },
    { value: 'social.socialSecurity', type: 'checkbox', label: 'Seguridad social' },
    { value: 'social.bankAccount', type: 'checkbox', label: 'Cuenta bancaria' },
    { value: 'social.creditCards', type: 'checkbox', label: 'Tarjetas de crédito' },
    { value: 'social.shopingByCatalog', type: 'checkbox', label: 'Compras por catálogo' }
];
// Job inputs for edit profile
const jobInputs = [
    {
        value: 'job.type', type: 'select', label: 'Tipo',
        options: [
            { value: 'DEFINITED', label: 'Definido' },
            { value: 'INDEFINITED', label: 'Indefinido' },
            { value: 'LABOUR', label: 'Trabajo' },
            { value: 'HOURLY', label: 'Por horas' },
            { value: 'INFORMAL', label: 'Informal' },
        ]
    },
    { value: 'job.salary', type: 'text', label: 'Salario', numeric: true },
    { value: 'job.duration', type: 'date', label: 'Tiempo' }
];
// Academic inputs for edit profile
const academicInputs = [
    {
        value: 'academic.educationLevel', type: 'select', label: 'Nivel académico',
        options: [
            { value: 'PRIMARY', label: 'Primaria' },
            { value: 'SECONDARY', label: 'Bachillerato' },
            { value: 'TECHNICAL', label: 'Técnico' },
            { value: 'TECHNOLOGICAL', label: 'Tecnológico' },
            { value: 'GRADUATED', label: 'Pregrado' },
            { value: 'POSTGRADUATED', label: 'Posgrado' },
        ]
    },
    { value: 'academic.ocupation', type: 'text', label: 'Ocupación' },
    { value: 'academic.laborSeniority', type: 'date', label: 'Antigüedad laboral' },
];
// Financial inputs for edit profile
const financialInputs = [
    { value: 'financial.monthlyIncomes', type: 'text', label: 'Ingresos mensuales', numeric: true },
    { value: 'financial.monthlyOutcomes', type: 'text', label: 'Gastos mensuales', numeric: true },
    { value: 'financial.currency', type: 'text', label: 'Moneda' }
];
// Adress inputs for edit profile
const adressInputs = [
    { value: 'addreses.line1', type: 'text', label: 'Linea 1' },
    { value: 'addreses.line2', type: 'text', label: 'Linea 2' },
    { value: 'addreses.city', type: 'text', label: 'Ciudad' },
    { value: 'addreses.state', type: 'text', label: 'Estado' }
];

export {
    profileInputs,
    socialInputs,
    jobInputs,
    academicInputs,
    financialInputs,
    adressInputs
};