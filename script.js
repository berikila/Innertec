gsap.registerPlugin(scrollTrigger,MotionPathPlugin, ScrollToPlugin, TextPlugin);

function reviewsScroll() {
  gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].utils.toArray('.reviews__group').forEach(function (section, index) {
      var w = section.querySelector('.reviews__wrapper');

      var _ref = index % 2 ? ['100%', (w.scrollHeight - section.offsetHeight) * -1] : [w.scrollHeight * -1, 0],
          _ref2 = _slicedToArray(_ref, 2),
          y = _ref2[0];
          // yEnd = _ref2[1];

      gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].fromTo(w, {
          y: y
      }, {
          y: 0,
          scrollTrigger: {
              trigger: ".reviews",
              toggleActions:"restart pause resume pause",
              start: "20px 80%",
              end: "0 0",
              scrub: 0.5
          }
      });
  });
}

function beerScroll() {
  var sections = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].utils.toArray(".beer-scroll__section");
  var maxWidth = 0;

  var getMaxWidth = function getMaxWidth() {
      maxWidth = 0;
      sections.forEach(function (section) {
          maxWidth += section.offsetWidth;
      });
  };

  getMaxWidth();
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].addEventListener("refreshInit", getMaxWidth);
  gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to(sections, {
      x: function x() {
          return "-".concat(maxWidth - window.innerWidth);
      },
      ease: "none",
      scrollTrigger: {
          trigger: ".beer-scroll",
          pin: true,
          scrub: true,
          end: function end() {
              return "+=".concat(maxWidth);
          },
          invalidateOnRefresh: true
      }
  });
  sections.forEach(function (sct, i) {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"].create({
          trigger: sct,
          start: function start() {
              return 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth));
          },
          end: function end() {
              return '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth));
          },
          toggleClass: {
              targets: sct,
              className: "active"
          }
      });
  });
}




// let tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".section1",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
//     toggleActions: "play reverse play reverse",
//     markers: true,
//   },
// });
// // let ba = window.innerWidth * 0.5;
// let ba2 = window.innerWidth;
// // tl2.fromTo("#left1h1", { x: 0 }, { x: -ba2 - ba2 / 4 }, 0);
// tl2.fromTo("#right1", { x: ba2 - ba2 / 3 }, { x: -ba2 - ba2 / 4 }, 0);

// // tl2.fromTo("#trumericimage", { x: ba2 }, { x: -ba2 });
// // tl2.fromTo("#trumericimage2", { x: ba2 }, { x: -ba2 });

// var action = gsap.to(".section1", {
//   ease: "none",
//   duration: 1,
//   zIndex: 0,
// });

// ScrollTrigger.create({
//   trigger: ".section1",
//   start: "top top",
//   endTrigger: ".section1",
//   end: "bottom bottom",
//   //markers: true,
//   pin: true,
//   pinSpacing: false,
//   animation: action,
//   toggleActions: "play reverse play reverse",
// });
