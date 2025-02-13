function playMusic() {
        // Mostrar la Sección 2
        showSection('section2');
        
        // Reproducir la música
        var audio = document.getElementById('audioPlayer');
        audio.volume = 0.3; 
        audio.play(); // Inicia la reproducción
}