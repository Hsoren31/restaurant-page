function managerInfo(){
    const managerInfo = document.createElement('div');

    const managerName = document.createElement('h2');
    managerName.textContent = 'Manager';

    const managerEmail = document.createElement('p');
    managerEmail.textContent = 'manager1@fakeEmail.com';

    const managerPhone = document.createElement('p');
    managerPhone.textContent = '(801)-555-0000';

    managerInfo.append(managerName, managerEmail, managerPhone);

    return managerInfo;
};

function ownerInfo(){
    const ownerInfo = document.createElement('div');

    const ownerName = document.createElement('h2');
    ownerName.textContent = 'Owner';

    const ownerEmail = document.createElement('p');
    ownerEmail.textContent = 'owner1@fakeEmail.com';

    const ownerPhone = document.createElement('p');
    ownerPhone.textContent = '(801)-555-0001';

    ownerInfo.append(ownerName, ownerEmail, ownerPhone);

    return ownerInfo;
};

export { managerInfo, ownerInfo}