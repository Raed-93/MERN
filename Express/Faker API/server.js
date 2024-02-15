const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { faker } = require('@faker-js/faker');

const createCompany = () => {
    const newFakeCompany = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name() + "-" + faker.company.suffixes(),
        address: faker.location.street() + "-" + faker.location.city() + "-" + faker.location.state() + "-" + faker.location.zipCode() + "-" + faker.location.country(),
        department: faker.commerce.department()
    };
    return newFakeCompany;
};

const createUser = () => {
    const newFakeuser = {
        id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber(),
    };
    return newFakeuser;
};

app.get("/api/faker/newCompany", (req, res) => {
    const newFakeCompany = createCompany();
    res.json(newFakeCompany);
});

app.get("/api/faker/newUser", (req, res) => {
    const newFakeUser = createUser();
    res.json(newFakeUser);
});

app.get("/api/faker/user/company", (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    res.json({ user: newFakeUser, company: newFakeCompany });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
