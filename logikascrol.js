document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menghasilkan ID unik
    function generateUniqueId(prefix) {
        return prefix + '-' + Math.random().toString(36).substr(2, 9);
    }

    // Menambahkan ID unik pada kotak Logika 1
    var logika1 = document.querySelector('.download-box');
    if (logika1) {
        var uniqueId = generateUniqueId('logika-1');
        logika1.id = uniqueId;
        // Update data-target pada tombol download di Logika 2
        var downloadButtons = document.querySelectorAll('.custom-download-btn');
        downloadButtons.forEach(function(button) {
            button.setAttribute('data-target', uniqueId);
        });
    }

    // Fungsi untuk scroll dengan durasi yang ditentukan
    function smoothScrollTo(target, duration) {
        var start = window.pageYOffset;
        var startTime = null;

        function scrollAnimation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var progress = currentTime - startTime;
            var progressPercentage = Math.min(progress / duration, 1);

            window.scrollTo(0, start + (target - start) * progressPercentage);

            if (progress < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        requestAnimationFrame(scrollAnimation);
    }

    // Menambahkan event listener pada tombol download di Logika 2
    var downloadButtons = document.querySelectorAll('.custom-download-btn');
    downloadButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('data-target');
            var targetBox = document.getElementById(targetId);
            if (targetBox) {
                smoothScrollTo(targetBox.offsetTop, 5000); // Durasi dalam milidetik (misalnya 1000 ms = 1 detik)
            }
        });
    });
});
