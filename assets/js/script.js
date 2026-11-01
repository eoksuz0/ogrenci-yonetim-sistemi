const students = [];

const menu = () => {
    const choose = prompt ('1-Öğrenci Ekle\n2-Öğrencileri Listele\n3-Öğreci Sil\n4-Uygulamadan Çık');
    
    if (choose === '1') {
        return addStudent();
    } 
    else if (choose === '2') {
        return listStudents();
    } 
    else if (choose === '3') {
        return deleteStudent();
    } 
    else if (choose === '4') {
        alert('Hoşcakalın!');
    }
    else {
        alert('Geçersiz seçim! Lütfen tekrar deneyin.');
        return menu();
    }
};

const listStudents = () => {
    if (students.length === 0) {
        alert('Henüz öğrenci eklenmedi.');
    } else {
        alert(students.map(student => `Öğrenci No: ${student.id}\nAdı: ${student.name}\nSoyadı: ${student.surname}\nCinsiyet: ${student.gender}`).join("\n\n"));
    }
    return menu();
};

const addStudent = () => {
    const id = students[students.length - 1]?.id ? students[students.length - 1].id + 1 : 1;
    const name = prompt('Öğrenci Adını Giriniz:');
    const surname = prompt('Öğrenci Soyadını Giriniz:');
    const gender = prompt('Öğrenci Cinsiyetini Giriniz (Erkek/Kız):');

    if (id && name && surname && gender) {
        
        students.push({ id, name, surname, gender });
        alert('Öğrenci başarıyla eklendi.');
    } else {
        alert('Lütfen tüm bilgileri doldurun.');
    }
    return menu();
};

const deleteStudent = () => {
    if (students.length === 0) {
        alert('Silinecek öğrenci bulunamadı.');
        return menu();
    }

    const idToDelete = prompt(
        students.map(student => `Öğrenci No: ${student.id} - ${student.name} ${student.surname}`).join("\n") +
        '\n\nSilmek istediğiniz öğrencinin numarasını giriniz:'
    );

    const index = students.findIndex(student => student.id === Number(idToDelete));
    if (index !== -1) {
        students.splice(index, 1);
        alert('Öğrenci başarıyla silindi.');
    } else {
        alert('Silinecek öğrenci bulunamadı.');
    }
    return menu();
};

const exitApp = () => {
    alert('Uygulamadan çıkılıyor...');
}

menu();