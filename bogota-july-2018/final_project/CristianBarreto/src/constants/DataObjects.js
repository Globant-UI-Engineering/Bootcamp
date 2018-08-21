class User {
    role: string;
    documentType: string;
    documentNumber: string;
    displayName: string;
    email: string;
    phoneNumber: string;
    photoURL: string;
    idNetwork: string;
    blocked: boolean;
    blockReason: string;
    isDisabled: boolean;
    lastLogin: string;
    firstName: string;
    lastName: string;
    bornDate: string;
    bornCity: string;
    bornState: string;
    height: string;
    bloodType: string;
    gender: string;
    $voiceRec: string;
    registrateOn: string;
    social: {
        maritalStatus: string,
        children: string,
        dependents: string,
        housingClass: string,
        housingTime: string,
        dataPlan: boolean,
        sisben: boolean,
        socialSecurity: boolean,
        bankAccount: boolean,
        creditCards: boolean,
        shopingByCatalog: boolean
    };
    job: {
        type: string,
        salary: string,
        currency: string,
        duration: string
    };
    academic: {
        educationLevel: string,
        ocupation: string,
        laborSeniority: string
    };
    financial: {
        monthlyIncomes: string,
        monthlyOutcomes: string,
        currency: string,
        assets: {
            type: string,
            appraisal: string,
            currency: string,
            comments: string
        }
    };
    addreses: {
        line1: string,
        line2: string,
        city: string,
        state: string,
        active: string,
        createdOn: string
    };
    devices: {
        device_id: string,
        manufacturer: string,
        model: string,
        lastSession: string,
        registeredOn: string
    };
};


export {
    User
}
