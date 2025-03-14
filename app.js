// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('¡Mensaje enviado con éxito!');
      e.target.reset();
    } else {
      alert('Hubo un error al enviar el mensaje.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error inesperado.');
  }
});
