function generateQRCode(text) {
    // Найдите контейнер для QR-кода
    const qrCodeContainer = document.getElementById('qrcode');

    // Очистите контейнер, если там уже есть QR-код
    qrCodeContainer.innerHTML = '';

    // Создайте новый QR-код
    new QRCode(qrCodeContainer, {
        text: text,
        width: 500,
        height: 500
    });
}

let testContent = 'https://netology.ru/'
let texFforLink = document.querySelector('#texFforLink');
texFforLink.testContent = testContent;

// Создаем элемент <a>
let link = document.createElement('a');
link.href = testContent;
link.textContent = testContent;

// Добавляем созданный элемент <a> в texFforLink
texFforLink.appendChild(link);

generateQRCode(testContent);
