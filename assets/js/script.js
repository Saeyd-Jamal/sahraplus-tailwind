const swiperHorizontal = new Swiper(".mySwiper-horizontal", {
  slidesPerView: 5.2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  rtl: true,
  breakpoints: {
    320: { slidesPerView: 2.2 },
    640: { slidesPerView: 3.2 },
    1024: { slidesPerView: 5.2 },
  },
});
document.querySelectorAll(".mySwiper-horizontal").forEach((swiper) => {
  swiper.addEventListener("mouseenter", () => {
    swiper.classList.add("z-50");
  });
  swiper.addEventListener("mouseleave", () => {
    swiper.classList.remove("z-50");
  });
});

const swiperVertical = new Swiper(".mySwiper-vertical", {
  slidesPerView: 6.2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  rtl: true,
  breakpoints: {
    320: { slidesPerView: 3.2 },
    640: { slidesPerView: 4.2 },
    1024: { slidesPerView: 6.2 },
  },
});
const swiperCategories = new Swiper(".mySwiper-categories", {
  slidesPerView: 6.2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  rtl: true,
  breakpoints: {
    320: { slidesPerView: 3.2 },
    640: { slidesPerView: 5.2 },
    1024: { slidesPerView: 8.2 },
  },
});

new Swiper(".best10Swiper", {
  slidesPerView: 5.5,
  spaceBetween: 20,
  rtl: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2.2 },
    640: { slidesPerView: 3.5 },
    1024: { slidesPerView: 5.5 },
  },
});

// *- Navbar -*
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const heroSection = document.getElementById("hero");
  const heroHeight = heroSection.offsetHeight;

  if (window.scrollY > heroHeight - 100) {
    navbar.classList.add("bg-navbar-dark");
  } else {
    navbar.classList.remove("bg-navbar-dark");
  }
});
$(document).ready(function () {
  // تبديل إلى قائمة اللغة
  $('#language-toggle').on('click', function (e) {
    e.stopPropagation();
    $('#menu-profile').addClass('hidden');
    $('#menu-language').removeClass('hidden');
  });

  // رجوع من قائمة اللغة إلى الملف الشخصي
  $('#back-to-profile').on('click', function () {
    $('#menu-language').addClass('hidden');
    $('#menu-profile').removeClass('hidden');
  });
});

$(document).ready(function () {
  // فتح
  $('#open-search').on('click', function () {
    $('#search-overlay').fadeIn(150).removeClass('hidden');
  
    // تركيز تلقائي بعد الظهور
    setTimeout(() => {
      $('#search-overlay input').focus();
    }, 200); // تأخير بسيط لتضمن ظهوره قبل التركيز
  });
  

  // إغلاق عند الضغط على "إلغاء" أو خارج الحقل
  $('#close-search, #search-overlay').on('click', function (e) {
    if (e.target.id === 'search-overlay' || e.target.id === 'close-search') {
      $('#search-overlay').fadeOut(150);
    }
  });

  // منع الإغلاق عند الضغط داخل الحقل
  $('#search-overlay input').on('click', function (e) {
    e.stopPropagation();
  });
  $('#search-overlay input').on('input', function () {
    const value = $(this).val().trim();
    if (value.length > 0) {
      $('#search-results').removeClass('hidden');
    } else {
      $('#search-results').addClass('hidden');
    }
  });
  
  
});


// *- Hero Slider -*
$(function () {
  const slides = $(".hero-slide");
  const videos = $("video");
  const dots = $(".hero-dot");
  const muteBtn = $("#muteBtn");
  const heroContent = $(".hero-content");
  let currentIndex = 0;
  let isMuted = true;
  let timer;

  const contents = [
    {
      title:
        'بعد خيانة أصدقائه والمرأة التي أحبها، يجد مجد نفسه خلف القضبان. لكنه لا ينهزم... بملامح جديدة وهوية مختلفة، يعود "آسر" لهدف واحد: الانتقام. ',
      tags: ["إثارة", "أكشن", "لبناني", "2024"],
      episode: "الموسم 1، الحلقة 1",
      logo: "./assets/images/logos/logo1.avif",
    },
    {
      title: "دراما مؤثرة لعشاق القصص الواقعية",
      tags: ["دراما", "واقعي", "2023"],
      episode: "الموسم 2، الحلقة 4",
      logo: "./assets/images/logos/logo2.avif",
    },
    {
      title: "دراما مؤثرة لعشاق القصص الواقعية",
      tags: ["دراما", "واقعي", "2023"],
      episode: "الموسم 2، الحلقة 4",
      logo: "./assets/images/logos/logo3.avif",
    },
    {
      title: "دراما مؤثرة لعشاق القصص الواقعية",
      tags: ["دراما", "واقعي", "2023"],
      episode: "الموسم 2، الحلقة 4",
      logo: "./assets/images/logos/logo4.avif",
    },
    {
      title: "دراما مؤثرة لعشاق القصص الواقعية",
      tags: ["دراما", "واقعي", "2023"],
      episode: "الموسم 2، الحلقة 4",
      logo: "./assets/images/logos/logo5.avif",
    },
  ];

  function updateContent(index) {
    const data = contents[index];
    heroContent.find(".logo-wrapper img").attr("src", data.logo);
    heroContent.find(".description").text(data.title);
    const tags = data.tags
      .map((tag, i) => (i < data.tags.length - 1 ? `${tag} •` : tag))
      .join(" ");
    heroContent.find(".tags").html(
      tags
        .split(" •")
        .map((t) => `<span class="text-gray-400">${t}</span>`)
        .join('<span class="text-gray-400">•</span>')
    );
    heroContent.find(".episode").text(data.episode);
  }

  function showSlide(index) {
    slides.removeClass("opacity-100").addClass("opacity-0");
    slides.eq(index).removeClass("opacity-0").addClass("opacity-100");

    videos.each(function () {
      this.pause();
      this.currentTime = 0;
      $(this).addClass("hidden");
    });

    updateContent(index);

    clearTimeout(timer);
    timer = setTimeout(() => {
      heroContent.addClass("video-playing"); // ✅ أضف الكلاس

      const video = slides.eq(index).find("video")[0];
      if (video) {
        $(video).removeClass("hidden");
        video.muted = isMuted;
        video.play().catch((err) => console.warn("فشل تشغيل الفيديو:", err));

        video.onended = () => {
          heroContent.removeClass("video-playing"); // ✅ أزله فقط بعد نهاية الفيديو
          goToNext();
        };
      }
    }, 3000);
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  dots.on("click", function () {
    const index = $(this).index();
    if (index !== currentIndex) {
      currentIndex = index;
      showSlide(currentIndex);
    }
  });

  muteBtn.on("click", function () {
    isMuted = !isMuted;
    $(this).attr("data-state", isMuted ? "muted" : "unmuted");
    videos.each(function () {
      this.muted = isMuted;
    });
  });

  showSlide(currentIndex);
});
