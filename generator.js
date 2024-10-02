function generateImage() {
    const canvas = document.getElementById('templateCanvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = 'assets/pss-template.png';  // Template Image

    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Get values from form
        const date = document.getElementById('date').value;
        const username = document.getElementById('username').value;
        const usermail = document.getElementById('usermail').value;
        const enddate = document.getElementById('enddate').value;
        const invoice = document.getElementById('invoice').value;
        const payment = document.getElementById('payment').value;
        const amount = document.getElementById('amount').value;
        const issuer = document.getElementById('issuer').value;
        const note = document.getElementById('note').value;

        // Set text positions (adjust these based on your template)
        ctx.font = '20px Arial';
        ctx.fillStyle = '#000';

        // Example for placing text in the middle of specific boxes
        ctx.fillText(date, 500, 200);  // Adjust coordinates as per your design
        ctx.fillText(username, 500, 240);
        ctx.fillText(usermail, 500, 280);
        ctx.fillText(enddate, 500, 320);
        ctx.fillText(invoice, 500, 360);
        ctx.fillText(payment, 300, 450);
        ctx.fillText(amount, 500, 450);
        ctx.fillText(issuer, 500, 500);
        ctx.fillText(note, 500, 550);

        // Create downloadable JPG
        const downloadLink = document.getElementById('downloadLink');
        const image = canvas.toDataURL('image/jpeg');
        downloadLink.href = image;
        downloadLink.download = 'generated-document.jpg';
        downloadLink.style.display = 'block';
        downloadLink.innerHTML = 'Download Generated JPG';
    };
}
