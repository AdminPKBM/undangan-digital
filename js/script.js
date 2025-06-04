document.addEventListener('DOMContentLoaded', () => {
    const TARGET_WEDDING_DATE = "2025-12-25T09:00:00"; // YYYY-MM-DDTHH:mm:ss

    const translations = {
        en: {
            page_title: "Wedding Invitation Raisa & Hamish",
            you_are_invited: "You are cordially invited to the wedding of",
            event_date_placeholder: "Saturday, December 25, 2025",
            days_unit: "Days", hours_unit: "Hours", minutes_unit: "Minutes", seconds_unit: "Seconds",
            greeting_heading: "Peace Be Upon You",
            share_for_guest_default: "To Mr./Ms./Mx. ",
            invitation_text: "Without diminishing respect, we invite you to share happiness on our wedding day.",
            bride_groom_heading: "The Bride & Groom",
            bride_bio: "Beloved Daughter of",
            bride_parent_info: "Mr. Andriana & Mrs. Andriana",
            groom_bio: "Beloved Son of",
            groom_parent_info: "Mr. Daud & Mrs. Daud",
            love_story_heading: "Our Love Story",
            story_event1_title: "First Meeting",
            story_event1_desc: "A brief story of how we first met and what made that moment special.",
            story_event2_title: "The Proposal",
            story_event2_desc: "The story of the proposal moment, how it happened, and the feelings that accompanied it.",
            event_details_heading: "Event Details",
            ceremony_heading: "Wedding Ceremony",
            ceremony_date: "Saturday, December 25, 2025",
            ceremony_time: "09:00 - 11:00 AM",
            ceremony_location: "Istiqlal Mosque, Jakarta",
            reception_heading: "Reception",
            reception_date: "Saturday, December 25, 2025",
            reception_time: "07:00 - 09:00 PM",
            reception_location: "Grand Ballroom Hotel Indonesia Kempinski",
            maps_button: "Open Maps Navigation",
            gallery_heading: "Photo Gallery",
            wishes_heading: "Wishes & Prayers",
            wishes_prompt: "Share your happiness by sending us your wishes and prayers.",
            wishes_name_placeholder: "Your Name",
            wishes_message_placeholder: "Write your wishes here...",
            send_wish_button: "Send Wish",
            wishes_info: "Guestbook feature with data storage requires backend implementation.",
            digital_gift_heading: "Digital Gift",
            digital_gift_message: "Your presence is the most beautiful gift. However, if you wish to give a token of love, we provide digital gift options:",
            dana_account: "DANA: 081234567890 (a.n. Raisa)",
            bca_account: "BCA: 1234567890 (a.n. Hamish)",
            copy_button: "Copy",
            share_invite_heading: "Share Invitation",
            share_on_whatsapp: "Share via WhatsApp",
            native_share_button: "Other Share Options",
            whatsapp_note: "WhatsApp share feature will open WhatsApp with a pre-filled message. Mass broadcast requires a backend solution.",
            footer_thank_you: "Thank you for your presence & blessings.",
            credits_text: "Invitation Made with <i class=\"fas fa-heart\"></i>"
        },
        id: {
            page_title: "Undangan Pernikahan Raisa & Hamish",
            you_are_invited: "Anda Diundang ke Pernikahan",
            event_date_placeholder: "Sabtu, 25 Desember 2025",
            days_unit: "Hari", hours_unit: "Jam", minutes_unit: "Menit", seconds_unit: "Detik",
            greeting_heading: "Assalamualaikum Wr. Wb.",
            share_for_guest_default: "Untuk Yth. ",
            invitation_text: "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk berbagi kebahagiaan di hari pernikahan kami.",
            bride_groom_heading: "Mempelai",
            bride_bio: "Putri Tercinta Dari",
            bride_parent_info: "Bapak Andriana & Ibu Andriana",
            groom_bio: "Putra Tercinta Dari",
            groom_parent_info: "Bapak Daud & Ibu Daud",
            love_story_heading: "Kisah Cinta Kami",
            story_event1_title: "Pertemuan Pertama",
            story_event1_desc: "Deskripsi singkat tentang bagaimana kami pertama kali bertemu dan apa yang membuat momen itu spesial.",
            story_event2_title: "Lamaran",
            story_event2_desc: "Cerita tentang momen lamaran, bagaimana itu terjadi, dan perasaan yang menyertainya.",
            event_details_heading: "Detail Acara",
            ceremony_heading: "Akad Nikah",
            ceremony_date: "Sabtu, 25 Desember 2025",
            ceremony_time: "09:00 - 11:00 WIB",
            ceremony_location: "Masjid Istiqlal, Jakarta",
            reception_heading: "Resepsi",
            reception_date: "Sabtu, 25 Desember 2025",
            reception_time: "19:00 - 21:00 WIB",
            reception_location: "Grand Ballroom Hotel Indonesia Kempinski",
            maps_button: "Navigasi Lokasi",
            gallery_heading: "Gallery Foto",
            wishes_heading: "Ucapan & Doa",
            wishes_prompt: "Bagikan kebahagiaan Anda dengan mengirimkan ucapan dan doa untuk kami.",
            wishes_name_placeholder: "Nama Anda",
            wishes_message_placeholder: "Tulis ucapan Anda di sini...",
            send_wish_button: "Kirim Ucapan",
            wishes_info: "Fitur ucapan dengan penyimpanan data memerlukan implementasi backend.",
            digital_gift_heading: "Amplop Digital",
            digital_gift_message: "Kehadiran Anda adalah hadiah terindah. Namun, jika Anda ingin memberikan tanda kasih, kami menyediakan opsi amplop digital:",
            dana_account: "DANA: 081234567890 (a.n. Raisa)",
            bca_account: "BCA: 1234567890 (a.n. Hamish)",
            copy_button: "Salin",
            share_invite_heading: "Bagikan Undangan",
            share_on_whatsapp: "Bagikan via WhatsApp",
            native_share_button: "Bagikan Lainnya",
            whatsapp_note: "Fitur bagikan WhatsApp akan membuka aplikasi WhatsApp dengan pesan siap kirim. Untuk broadcast massal, diperlukan solusi backend.",
            footer_thank_you: "Terima kasih atas kehadiran & doa restu Anda.",
            credits_text: "Undangan Dibuat dengan <i class=\"fas fa-heart\"></i>"
        }
    };

    let currentLanguage = 'id';

    // --- Loader ---
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 500); // Delay to ensure smooth transition if content loads too fast
    });

    // --- Countdown Timer ---
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownContainer = document.getElementById('countdown');

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function updateCountdown() {
        if (!countdownContainer) return; // Stop if container not found

        const eventDate = new Date(TARGET_WEDDING_DATE);
        const currentDate = new Date();
        const totalSeconds = (eventDate - currentDate) / 1000;

        if (totalSeconds <= 0) {
            countdownContainer.innerHTML = `<div data-lang-key="event_started">${currentLanguage === 'id' ? 'Acara Telah Dimulai!' : 'The Event Has Started!'}</div>`;
            return;
        }

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        if (daysEl) daysEl.innerText = formatTime(days);
        if (hoursEl) hoursEl.innerText = formatTime(hours);
        if (minutesEl) minutesEl.innerText = formatTime(minutes);
        if (secondsEl) secondsEl.innerText = formatTime(seconds);
    }

    if (countdownContainer) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // --- Background Music ---
    const musicToggleBtn = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    let musicPlaying = false;
    let userInteracted = false;

    function playMusicOnClick() {
        if (!userInteracted) {
            userInteracted = true; // Mark that user has interacted
            if (backgroundMusic && backgroundMusic.paused) {
                backgroundMusic.play().then(() => {
                    musicPlaying = true;
                    if (musicToggleBtn) musicToggleBtn.classList.add('playing');
                }).catch(error => {
                    console.warn("Music autoplay prevented by browser. Needs explicit click on button.", error);
                     if (musicToggleBtn) musicToggleBtn.classList.remove('playing');
                });
            }
        }
        // Remove the general page click listener after first interaction to enable normal button toggle
        document.body.removeEventListener('click', playMusicOnClick, true);
    }
    // Listen for ANY click on the body to attempt playing music for the first time (due to autoplay policies)
    document.body.addEventListener('click', playMusicOnClick, { once: true, capture: true });


    if (musicToggleBtn && backgroundMusic) {
        musicToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent body click listener from firing again if it's still there
            userInteracted = true; // Ensure this is set
            if (backgroundMusic.paused) {
                backgroundMusic.play().then(() => {
                    musicPlaying = true;
                    musicToggleBtn.classList.add('playing');
                }).catch(error => console.error("Error playing music:", error));
            } else {
                backgroundMusic.pause();
                musicPlaying = false;
                musicToggleBtn.classList.remove('playing');
            }
        });
    }


    // --- Gallery Slideshow ---
    let slideIndex = 1;
    const slides = document.getElementsByClassName("gallery-slide");

    function showSlides(n) {
        if (slides.length === 0) return;
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.remove('fade-anim'); // Remove anim class
        void slides[slideIndex - 1].offsetWidth; // Trigger reflow
        slides[slideIndex - 1].classList.add('fade-anim'); // Add anim class for fade effect
    }

    if (slides.length > 0) {
      showSlides(slideIndex);
    }

    window.plusSlides = function(n) { // Make it global for HTML onclick
        showSlides(slideIndex += n);
    };

    // --- Scroll Animations (Fade-in Sections) ---
    const sectionsToFade = document.querySelectorAll('main section.fade-in');
    if (window.IntersectionObserver) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Section 15% visible
        };
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        sectionsToFade.forEach(section => {
            sectionObserver.observe(section);
        });
    } else { // Fallback for older browsers
        sectionsToFade.forEach(section => section.classList.add('visible'));
    }


    // --- Language Toggle ---
    const languageToggleBtn = document.getElementById('language-toggle');
    function setLanguage(lang) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        if (languageToggleBtn) {
            languageToggleBtn.textContent = lang === 'id' ? 'English' : 'Indonesia';
        }

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-lang-placeholder-key]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder-key');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Update countdown unit names
        if (countdownContainer && document.getElementById('countdown').children.length > 1) {
            const daysUnitEl = countdownContainer.querySelector('span[data-lang-key="days_unit"]');
            const hoursUnitEl = countdownContainer.querySelector('span[data-lang-key="hours_unit"]');
            const minutesUnitEl = countdownContainer.querySelector('span[data-lang-key="minutes_unit"]');
            const secondsUnitEl = countdownContainer.querySelector('span[data-lang-key="seconds_unit"]');

            if (daysUnitEl) daysUnitEl.textContent = translations[lang].days_unit;
            if (hoursUnitEl) hoursUnitEl.textContent = translations[lang].hours_unit;
            if (minutesUnitEl) minutesUnitEl.textContent = translations[lang].minutes_unit;
            if (secondsUnitEl) secondsUnitEl.textContent = translations[lang].seconds_unit;
        }
        updateGuestNameDisplay(); // Update guest name display based on new language
    }

    if (languageToggleBtn) {
        languageToggleBtn.addEventListener('click', () => {
            const newLang = currentLanguage === 'id' ? 'en' : 'id';
            setLanguage(newLang);
        });
    }

    // --- Share with Guest Name (from URL parameter) ---
    const urlParams = new URLSearchParams(window.location.search);
    const guestNameFromUrl = urlParams.get('to');
    const guestNameDisplayEl = document.getElementById('guest-name-display');

    function updateGuestNameDisplay() {
        if (guestNameDisplayEl) {
            let textToShow = translations[currentLanguage].share_for_guest_default;
            if (guestNameFromUrl) {
                textToShow += decodeURIComponent(guestNameFromUrl);
            } else {
                textToShow += (currentLanguage === 'id' ? 'Para Tamu Undangan' : 'Valued Guests');
            }
            guestNameDisplayEl.innerHTML = textToShow; // Use innerHTML if default text might contain HTML
        }
    }


    // --- WhatsApp Share ---
    const whatsappShareBtn = document.getElementById('whatsapp-share-btn');
    if (whatsappShareBtn) {
        whatsappShareBtn.addEventListener('click', () => {
            const guestNameToShare = guestNameFromUrl ? decodeURIComponent(guestNameFromUrl) : (currentLanguage === 'id' ? 'Bapak/Ibu/Saudara/i' : 'Mr./Mrs./Ms.');
            let message = translations[currentLanguage].page_title + // "Wedding Invitation Raisa & Hamish"
                `\n\n${translations[currentLanguage].greeting_heading}` + // "Assalamualaikum..."
                `\n\n${translations[currentLanguage].invitation_text.replace('Bapak/Ibu/Saudara/i', guestNameToShare)}` +
                `\n\n${currentLanguage === 'id' ? 'Info lengkap' : 'Full info'}: ${window.location.href.split('?')[0]}` + // Remove existing query params for cleaner link
                `\n\n${translations[currentLanguage].footer_thank_you}`;

            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // --- Native Share ---
    const nativeShareBtn = document.getElementById('native-share-btn');
    if (nativeShareBtn && navigator.share) {
        nativeShareBtn.addEventListener('click', async () => {
            const guestNameToShare = guestNameFromUrl ? decodeURIComponent(guestNameFromUrl) : '';
            const shareData = {
                title: translations[currentLanguage].page_title,
                text: `${translations[currentLanguage].you_are_invited} Raisa & Hamish. ${guestNameToShare ? (translations[currentLanguage].share_for_guest_default + guestNameToShare) : ''}`,
                url: window.location.href.split('?')[0] // Clean URL
            };
            try {
                await navigator.share(shareData);
                console.log('Invitation shared successfully');
            } catch (err) {
                console.error('Error sharing:', err);
                // alert('Gagal membagikan undangan.'); // Optional: user feedback
            }
        });
    } else if (nativeShareBtn) {
        nativeShareBtn.style.display = 'none'; // Hide if navigator.share is not supported
    }

    // --- Wish Form (Placeholder) ---
    const wishForm = document.getElementById('wish-form');
    if (wishForm) {
        wishForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('guest-name-input');
            const wishInput = document.getElementById('guest-wish-input');
            if (nameInput && wishInput) {
                const name = nameInput.value;
                // const wish = wishInput.value; // Value not used in alert currently
                alert(currentLanguage === 'id' ?
                    `Terima kasih ${name} atas ucapannya! (Demo)` :
                    `Thank you ${name} for your wishes! (Demo)`);
                wishForm.reset();
            }
        });
    }

    // --- Digital Envelope - Copy Account Number ---
    document.querySelectorAll('.btn-copy').forEach(button => {
        button.addEventListener('click', function() {
            const accountNumber = this.dataset.account;
            if (accountNumber) {
                navigator.clipboard.writeText(accountNumber).then(() => {
                    alert(translations[currentLanguage].copy_button + ` ${currentLanguage === 'id' ? 'berhasil' : 'successful'}: ` + accountNumber);
                    this.innerText = translations[currentLanguage].copied_button || (currentLanguage === 'id' ? 'Tersalin' : 'Copied');
                    setTimeout(() => {
                        this.innerText = translations[currentLanguage].copy_button;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                    alert(currentLanguage === 'id' ? 'Gagal menyalin.' : 'Failed to copy.');
                });
            }
        });
    });
    // Add 'copied_button' to translations if you want dynamic text change on copy button
    translations.id.copied_button = "Tersalin";
    translations.en.copied_button = "Copied";


    // --- Footer Current Year ---
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Initial setup
    setLanguage(currentLanguage); // This will also call updateGuestNameDisplay

});