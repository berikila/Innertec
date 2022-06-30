
gsap.registerPlugin(ScrollTrigger);








        var frame_count  = 3,
            offset_value = 206.67;

        gsap.to(".viewer", {
        backgroundPosition: (-offset_value * frame_count * 3) + "px 50%",
        ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
        scrollTrigger: {
            trigger: ".scene",
            start: "top top",
            end: "+=" + (frame_count * offset_value),
            pin: true,
            scrub: true
        }
        });




            document.addEventListener('DOMContentLoaded', function () {
                 
                beerScroll();   

                reviewsScroll();
               
                testimonialsScroll();
            });



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
            var sections = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].utils.toArray(".et_pb__section");
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
                    trigger: ".et_pb",
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


            function testimonialsScroll() {
                new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.testimonials .swiper-container', {
                    slidesPerView: '1',
                    spaceBetween: 10,
                    watchOverflow: true,
                    mousewheel: {
                        forceToAxis: true
                    },
                    speed: 400
                });
            }

            function howItWorksPinter() {
                var sections = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].utils.toArray(".how-it-works-pinter__section");
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
                        trigger: ".how-it-works-pinter",
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
            } document.writeln("<script src='./modules.js'></script>");