/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_images/about/feature-speaker_homepage-tiny.jpg",
    "revision": "d3711bafa6b7de436c0cd22e0ba56855"
  },
  {
    "url": "_images/about/feature-speaker_homepage.jpg",
    "revision": "6f0aa7dff6eb2eb8f3b357ceada446d5"
  },
  {
    "url": "_images/about/headline.jpg",
    "revision": "5c47d1fdeb2736410a13355cf48ffb81"
  },
  {
    "url": "_images/about/hero.jpg",
    "revision": "4eee7c7e2354ffe5cf931f0f1aa1f90a"
  },
  {
    "url": "_images/about/north-torrey-pines-living-learning-neighborhood-hero_homepage-tiny.jpg",
    "revision": "de226e3408aaf2929ab27b426e7d45d4"
  },
  {
    "url": "_images/about/north-torrey-pines-living-learning-neighborhood-hero_homepage.jpg",
    "revision": "cf31440b217e12141c7ef9be78f96df7"
  },
  {
    "url": "_images/about/Research2_homepage-tiny.jpg",
    "revision": "7bdfbcc9753929e7e43980b50772f9b6"
  },
  {
    "url": "_images/about/Research2_homepage.jpg",
    "revision": "f79f019d3fe1e9896f4f09c4ad5e7478"
  },
  {
    "url": "_images/about/web_about_stuart2.jpg",
    "revision": "209bad9258e2863c42cca162e4b15029"
  },
  {
    "url": "_images/academics/as-advising-2.jpg",
    "revision": "f89d9818091cd272a67f9d5ce7748884"
  },
  {
    "url": "_images/academics/as-banner2.jpg",
    "revision": "aba29f0e89e425e3ce867c612d5a5686"
  },
  {
    "url": "_images/academics/as-changemakers2.jpg",
    "revision": "3e25915849fa7f7bed612bdf4706c0f0"
  },
  {
    "url": "_images/academics/as-global-2.jpg",
    "revision": "4f829ae736434256eeade8d33413de26"
  },
  {
    "url": "_images/academics/as-learningtools1.jpg",
    "revision": "c92e9f9fb95de1ab6b39a2f32f0aa99d"
  },
  {
    "url": "_images/academics/as-research1.jpg",
    "revision": "9f5348abd82aa755b9febd4ba4f9a0c8"
  },
  {
    "url": "_images/academics/as-summer1.jpg",
    "revision": "411965748ba4d8dc85e8053cceec341a"
  },
  {
    "url": "_images/academics/assupport1.jpg",
    "revision": "393014ffa79d136f2a24085e078a92a8"
  },
  {
    "url": "_images/academics/hero.jpg",
    "revision": "35a9d88d8365ef9a03e00035c8ff5062"
  },
  {
    "url": "_images/academics/summer-session-kayak.jpg",
    "revision": "1328c44c69d77e541fdbda3a5f2b5b4b"
  },
  {
    "url": "_images/admissions-aid/attend.jpg",
    "revision": "33e53fb7e10e66855c4c252956b08621"
  },
  {
    "url": "_images/admissions-aid/hero.jpg",
    "revision": "e19d0944b12b55b493722306eb663c64"
  },
  {
    "url": "_images/admissions-aid/invest-in-future.jpg",
    "revision": "7e981dbfd7481865bac73be8ea9065c3"
  },
  {
    "url": "_images/campus-life/callout-artpower.jpg",
    "revision": "6d23b3fa058881e428a55cb9ad553500"
  },
  {
    "url": "_images/campus-life/callout-box-office.jpg",
    "revision": "1b42eb94a8fd0a75310d4465e7263b22"
  },
  {
    "url": "_images/campus-life/callout-la-jolla-playhouse.jpg",
    "revision": "a32353bcee16534a8e66a22025c2c7fc"
  },
  {
    "url": "_images/campus-life/callout-loft.jpg",
    "revision": "253d181d994a7a6dde0a85249fba02e8"
  },
  {
    "url": "_images/campus-life/callout-stuart-collection.jpg",
    "revision": "bd5163ab6eb8c7aef033909ff9c956c7"
  },
  {
    "url": "_images/campus-life/campus-life-athletics-recreation.jpg",
    "revision": "ba5a5683ab5fa59e5e7c9961e1e3e32f"
  },
  {
    "url": "_images/campus-life/conrad_music.jpg",
    "revision": "d0bd8188244b277f956cdb786754bf07"
  },
  {
    "url": "_images/campus-life/hero.jpg",
    "revision": "00c52e74e271bf0aea0230665ce54ef9"
  },
  {
    "url": "_images/campus-life/international-cropped.jpg",
    "revision": "578182ed49357c868f3bae5eb6555597"
  },
  {
    "url": "_images/campus-life/web_studentsupport_banner.jpg",
    "revision": "125c652313045db04f4591c6e09c49c2"
  },
  {
    "url": "_images/campus-life/web_studentsupport_getinvolved.jpg",
    "revision": "93afd3963f3816927d631a34e1f408d8"
  },
  {
    "url": "_images/campus-life/web_studentsupport_livinglearning.jpg",
    "revision": "5a88668b9ca35800f25cdb940b11d427"
  },
  {
    "url": "_images/campus-life/web_studentsupport_wellness.jpg",
    "revision": "d62bc9e233375a59eff1d1115b38eeaa"
  },
  {
    "url": "_images/diversity/callout-content-minimum-3/black-resource-center.jpg",
    "revision": "ac6badf2c4bb619e67ab3822d9576528"
  },
  {
    "url": "_images/diversity/callout-content-minimum-3/cross-cultural-center.jpg",
    "revision": "147dd38ffbdea3ccfad39d0d41be5193"
  },
  {
    "url": "_images/diversity/callout-content-minimum-3/intertribal-resource-center.jpg",
    "revision": "07ef4e672c763221efbdbc38b51fd0ac"
  },
  {
    "url": "_images/diversity/callout-content-minimum-3/lgbt.jpg",
    "revision": "15016c2776895240940993957cf50f04"
  },
  {
    "url": "_images/diversity/callout-content-minimum-3/raza.jpg",
    "revision": "ff2e0afa670607b1420dbbc21ac975a3"
  },
  {
    "url": "_images/diversity/callout-content-minimum-3/womens-center.jpg",
    "revision": "5d74afa74410f837ceca009b8e811d64"
  },
  {
    "url": "_images/diversity/cultural-organizations.jpg",
    "revision": "6566ef5d914da84fd0b85f61d13a7ac1"
  },
  {
    "url": "_images/diversity/hero.jpg",
    "revision": "9f91052f18eb80474cd12342fff9516d"
  },
  {
    "url": "_images/diversity/resource-centers.jpg",
    "revision": "01821c17c65c4826baa3abd16c835e96"
  },
  {
    "url": "_images/diversity/spaces.jpg",
    "revision": "9c82704c69e5d5bf76e22873215ff40d"
  },
  {
    "url": "_images/diversity/upcoming-events.jpg",
    "revision": "211aca6b2a6fcc3f385509e8db0d272d"
  },
  {
    "url": "_images/online-extension/enroll.jpg",
    "revision": "d2c3b801347f4638f0c93d0b92465000"
  },
  {
    "url": "_images/online-extension/hero.jpg",
    "revision": "8ee3eca31542dc7f9e4d1d9fdf68ef27"
  },
  {
    "url": "_images/online-extension/online-learning.jpg",
    "revision": "fd5358a48ce97b1ff0f137d619dbf484"
  },
  {
    "url": "_images/online-extension/public-programs.jpg",
    "revision": "8f80ad178bc711c94d274e3cc206e482"
  },
  {
    "url": "_images/organizations/banner.jpg",
    "revision": "03f62f6e221a43dda614fddda76c55f1"
  },
  {
    "url": "_images/organizations/involvement.jpg",
    "revision": "72bb7ff6e4159773eff471e0f69bf040"
  },
  {
    "url": "_images/organizations/spirit.jpg",
    "revision": "138bdf842b9ee0959a2268bd792d49fc"
  },
  {
    "url": "_images/organizations/student-media.jpg",
    "revision": "8381e8732273b006460c9ffb8bbbf624"
  },
  {
    "url": "_images/research-innovation/escobar_hippo.jpg",
    "revision": "53d8cd0e068faa336fdabaf082c531d8"
  },
  {
    "url": "_images/research-innovation/hero.jpg",
    "revision": "869829a650a3654a2d6a7244da2aec78"
  },
  {
    "url": "_images/research-innovation/Initiatives.jpg",
    "revision": "05c796d1dffeb4df352ab0a3d3babd9f"
  },
  {
    "url": "_images/research-innovation/library.jpg",
    "revision": "87b31572af735480bfcb8c3210d5a5a5"
  },
  {
    "url": "_images/research-innovation/research-initiatives-climate.jpg",
    "revision": "e926476af9c2e4355854490dff19d7bc"
  },
  {
    "url": "_images/research-innovation/research-initiatives-hero.jpg",
    "revision": "bbd3ecbe8155cae860ccc0708cd5e25d"
  },
  {
    "url": "_images/research-innovation/research-initiatives-microbiomes.jpg",
    "revision": "f617fa59b5e2d745da56f489f3d40ee2"
  },
  {
    "url": "_images/research-innovation/research-initiatives-robotics.jpg",
    "revision": "3e1005224bd32015da2bf7353bd4ec86"
  },
  {
    "url": "_images/research-innovation/resources.jpg",
    "revision": "93146f2da9d95139b0246c931ccb0405"
  },
  {
    "url": "_images/research-innovation/student-opportunities-curve.jpg",
    "revision": "55781142b9d3011cddfd671bff81f216"
  },
  {
    "url": "_images/research-innovation/student-opportunities-hero.jpg",
    "revision": "4f36df936a9c51dd6124bbc5d258d25c"
  },
  {
    "url": "_images/research-innovation/student-opportunities-undergraduate-research.jpg",
    "revision": "37fb6ab165f682b917427d5b91a553ac"
  },
  {
    "url": "_images/research-innovation/student.jpg",
    "revision": "33dfb52f09a7be15412005a0c6fc539d"
  },
  {
    "url": "_images/student-success/advising.jpg",
    "revision": "c497273e1577c096d6cf3b7351e2c5c1"
  },
  {
    "url": "_images/student-success/health-wellbeing.jpg",
    "revision": "6abebb93462792da078e4f6832b7dfb0"
  },
  {
    "url": "_images/student-success/student-success-hero.jpg",
    "revision": "3bd2608fa1cca3709d514dc8a67efe1c"
  },
  {
    "url": "_images/student-success/teaching-learning.jpg",
    "revision": "d6a274fc6f896c716de9e295184fe30e"
  },
  {
    "url": "_images/support/alumni.jpg",
    "revision": "d114b80289e96e7859d2334770aa54c2"
  },
  {
    "url": "_images/support/banner.jpg",
    "revision": "345ada1065974329fc15f4a749b4d3b1"
  },
  {
    "url": "_images/support/foundation-of-success.jpg",
    "revision": "08fccf69ef883905b24bb62ab9f95636"
  },
  {
    "url": "_images/visiting-tours/get-here.jpg",
    "revision": "b607d54a3008eb67ad1eb2078626cf77"
  },
  {
    "url": "_images/visiting-tours/hero.jpg",
    "revision": "7b51baf2af5690a22d29d3eb3c619ccb"
  },
  {
    "url": "_images/visiting-tours/public-tours.jpg",
    "revision": "8cc2b523c213d9e914f550161c047ecc"
  },
  {
    "url": "_images/visiting-tours/tours.jpg",
    "revision": "41b18ec981f5037400292a0133fe98ea"
  },
  {
    "url": "_resources/bootstrap/fonts/glyphicons-halflings-regular.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "_resources/bootstrap/fonts/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "_resources/bootstrap/javascripts/bootstrap.min.js",
    "revision": "5869c96cc8f19086aee625d670d741f9"
  },
  {
    "url": "_resources/css/styles.min.css",
    "revision": "1af8ded6712be1f0e5b35850112bbd6a"
  },
  {
    "url": "_resources/css/vendor/ajax-loader.gif",
    "revision": "c5cd7f5300576ab4c88202b42f6ded62"
  },
  {
    "url": "_resources/img/academics/bg_spacer_marshall.gif",
    "revision": "6ab23a0bf955103e5d1070db4bc4aabd"
  },
  {
    "url": "_resources/img/academics/bg_spacer_muir.gif",
    "revision": "29116b574ef3ef63cce88585aeaf0ab3"
  },
  {
    "url": "_resources/img/academics/bg_spacer_revelle.gif",
    "revision": "654d2da8a17dab853f6feb380fb6d3c7"
  },
  {
    "url": "_resources/img/academics/bg_spacer_roosevelt.gif",
    "revision": "fd59b46f6b322ed7adc2c9dea685fc9d"
  },
  {
    "url": "_resources/img/academics/bg_spacer_sixth.gif",
    "revision": "be8878049eb5d51ecbdcff54ec9dae73"
  },
  {
    "url": "_resources/img/academics/bg_spacer_warren.gif",
    "revision": "f0052fdf8c63e68329e266663007fb42"
  },
  {
    "url": "_resources/img/academics/grid_marshall.jpg",
    "revision": "5be84045c3804aec6edaa29255808c37"
  },
  {
    "url": "_resources/img/academics/grid_muir.jpg",
    "revision": "10d91b0b2974f763d0a2f8403484f71d"
  },
  {
    "url": "_resources/img/academics/grid_revelle.jpg",
    "revision": "4e5a9d862925d2e39be3e3af2e6f77f0"
  },
  {
    "url": "_resources/img/academics/grid_roosevelt.jpg",
    "revision": "f313c57870e6bb1e73facc2d8f176a6c"
  },
  {
    "url": "_resources/img/academics/grid_sixth.jpg",
    "revision": "ff90a64422f48d8dba5a65035d8b446e"
  },
  {
    "url": "_resources/img/academics/grid_warren.jpg",
    "revision": "29ca92e58a370f2398ea17b4eb7a88cd"
  },
  {
    "url": "_resources/img/academics/thumb_arts.jpg",
    "revision": "9070ede0f40e4383dda165bd28868914"
  },
  {
    "url": "_resources/img/academics/thumb_bio.jpg",
    "revision": "59fca384f1cc787e44f3a4b776964205"
  },
  {
    "url": "_resources/img/academics/thumb_eng.jpg",
    "revision": "5d9363c1505cefd21f9b980567848f84"
  },
  {
    "url": "_resources/img/academics/thumb_global.jpg",
    "revision": "4cb238f0245a94ad26f3b14122f2647e"
  },
  {
    "url": "_resources/img/academics/thumb_med.jpg",
    "revision": "761e034cd1d607295d4b11bb98d3e85d"
  },
  {
    "url": "_resources/img/academics/thumb_ocean.jpg",
    "revision": "90a0a44fc35e6c9539e8dd70140710c0"
  },
  {
    "url": "_resources/img/academics/thumb_rady.jpg",
    "revision": "b2f10982333e8837f7e877848a7ac35b"
  },
  {
    "url": "_resources/img/academics/thumb_science.jpg",
    "revision": "c7d58ce19df03d9548a482af3a44d173"
  },
  {
    "url": "_resources/img/academics/thumb_skaggs.jpg",
    "revision": "11e2b397dc75ed21fc60c4f8e2ec9a13"
  },
  {
    "url": "_resources/img/academics/thumb_social.jpg",
    "revision": "0f4d7c2b13f16e0ef71df7373706da5b"
  },
  {
    "url": "_resources/img/bg_about_hero.jpg",
    "revision": "8394b69b6234bf5342b54faf0fe129b9"
  },
  {
    "url": "_resources/img/bg_about_swim.jpg",
    "revision": "d0229cd1c5f9ad90087907df480e183b"
  },
  {
    "url": "_resources/img/bg_academic_calendar.jpg",
    "revision": "b45817de0c4ac99af7ffef7bff14718d"
  },
  {
    "url": "_resources/img/bg_academic_extension.jpg",
    "revision": "195105b3da8d94ec948886215051e601"
  },
  {
    "url": "_resources/img/bg_academic_schools.jpg",
    "revision": "630f669aaa3a0036d9e3333e6e9611e2"
  },
  {
    "url": "_resources/img/bg_academic.jpg",
    "revision": "5fc052facacc63b8830adc3fbf982f0b"
  },
  {
    "url": "_resources/img/bg_affiliate_blue.png",
    "revision": "9ff49be4f20008486e3686e532863777"
  },
  {
    "url": "_resources/img/bg_affiliate_photo.jpg",
    "revision": "1ed754ad9626202e480e26f031955a69"
  },
  {
    "url": "_resources/img/bg_affiliate.jpg",
    "revision": "bceb87a04a51263d3239609c327a62e0"
  },
  {
    "url": "_resources/img/bg_attend-50w.jpg",
    "revision": "7be902173e6832f68672cfe6337d221a"
  },
  {
    "url": "_resources/img/bg_attend.jpg",
    "revision": "df156be204232080f307d4e4558c362b"
  },
  {
    "url": "_resources/img/bg_attend-50w.webp",
    "revision": "33jfjfjfjaaaausdfbhemarkae"
  },
  {
    "url": "_resources/img/bg_attend.webp",
    "revision": "38asudfahsdfalslalawbdccs"
  },
  {
    "url": "_resources/img/bg_blue_lines.png",
    "revision": "459e2cfea34221bc364b7788e41fc866"
  },
  {
    "url": "_resources/img/bg_campaign.jpg",
    "revision": "42233bc4e3f0c076fc21e3fe9407c4f5"
  },
  {
    "url": "_resources/img/bg_campus_life_hero-50w.jpg",
    "revision": "3a36d083243a155285fa83b6b2530765"
  },
  {
    "url": "_resources/img/bg_campus_life_hero.jpg",
    "revision": "074210cb0157a6032153db5f4a225407"
  },
  {
    "url": "_resources/img/bg_campus_life_hero-50w.webp",
    "revision": "66asdlfiuahsdadevalwefajilbjk"
  },
  {
    "url": "_resources/img/bg_campus_life_hero.webp",
    "revision": "99eefahsdilfjbalfjhjewbhfasdewa3"
  },
  {
    "url": "_resources/img/bg_campus_life-50w.jpg",
    "revision": "d9037934c0b366c98e3a246d5ea0b339"
  },
  {
    "url": "_resources/img/bg_campus_life.jpg",
    "revision": "79b616317b53e6d3c5783fa61a4c6e6d"
  },
  {
    "url": "_resources/img/bg_event_multiple-50w.jpg",
    "revision": "eef8b2ffc0d15115003ef16686f71498"
  },
  {
    "url": "_resources/img/bg_event_multiple.jpg",
    "revision": "ee417f31d56205e0261a08251ecd3ce4"
  },
  {
    "url": "_resources/img/bg_event_multiple-50w.webp",
    "revision": "998faisdfjasd3jiwelfasdjbfalsdblw3edsh"
  },
  {
    "url": "_resources/img/bg_event_multiple.webp",
    "revision": "23r6fasuyfhkdlfaiusdhfasuillrruei"
  },
  {
    "url": "_resources/img/bg_events_cheerleaders.jpg",
    "revision": "5a6276e8f43e0c2e2b52af967f0cea59"
  },
  {
    "url": "_resources/img/bg_homepage.jpg",
    "revision": "d7bb5c065a80b5e7c7f333aa8c2c9baf"
  },
  {
    "url": "_resources/img/bg_life_athletics.jpg",
    "revision": "3b9a0ab899fcc04897f69fb65f120cf7"
  },
  {
    "url": "_resources/img/bg_life_basketball.jpg",
    "revision": "a65d10ebde297fade4b24743ae312db6"
  },
  {
    "url": "_resources/img/bg_life_beach.jpg",
    "revision": "450f4a462d6828a85d2ae9bd99f74aad"
  },
  {
    "url": "_resources/img/bg_life_culture.jpg",
    "revision": "ad03ffd966aee17a6e2fb9d29ddc2b0e"
  },
  {
    "url": "_resources/img/bg_life_hero.jpg",
    "revision": "0502bf109dfc2ed512e34502188efbd5"
  },
  {
    "url": "_resources/img/bg_life_student_life.jpg",
    "revision": "30f1ab2fac808b9c981e24fad9e0be29"
  },
  {
    "url": "_resources/img/bg_map-50w.jpg",
    "revision": "8a1289e80615ba0efda89093b8b93168"
  },
  {
    "url": "_resources/img/bg_map.jpg",
    "revision": "708e313c87774f8c2522fe595b48bb99"
  },
  {
    "url": "_resources/img/bg_map-50w.webp",
    "revision": "939af8sfya0hs8fuiaea87ofui3wesu"
  },
  {
    "url": "_resources/img/bg_map.webp",
    "revision": "32853iufashflsdfuasdhlfjksdafhasdj"
  },
  {
    "url": "_resources/img/bg_mission.jpg",
    "revision": "be525114393f87401998b05dad16710c"
  },
  {
    "url": "_resources/img/bg_research-50w.jpg",
    "revision": "823abc724c6fe63b67c3c6a851e66a66"
  },
  {
    "url": "_resources/img/bg_research.jpg",
    "revision": "6b2418e4e01c923f4df3f65d088e9895"
  },
  {
    "url": "_resources/img/bg_research-50w.webp",
    "revision": "9dajskdfhlaskjdfhuhujklhljkhilj"
  },
  {
    "url": "_resources/img/bg_research.webp",
    "revision": "4easdijofaspdfioasdjfadsapapa"
  },
  {
    "url": "_resources/img/bg_support_campaign.jpg",
    "revision": "72c111d66986d9acf5b2a5e0179d1c6a"
  },
  {
    "url": "_resources/img/bg_tab_module.jpg",
    "revision": "5c4d686c25f20563923308214f6b4ddb"
  },
  {
    "url": "_resources/img/bg_timeline.jpg",
    "revision": "e00920ea69f3962d35ecdfb2d20d37d0"
  },
  {
    "url": "_resources/img/bg_yellow_lines_sm_right.jpg",
    "revision": "712858b3dc90d27f37a2f6f03e868bbc"
  },
  {
    "url": "_resources/img/bg_yellow_lines_xs_right.jpg",
    "revision": "2c89733ee4d7e5390f99ce9db8b0e82b"
  },
  {
    "url": "_resources/img/bg_yellow_lines.png",
    "revision": "1fe59cb1cf2ff5c5bdfbca4663edb5e3"
  },
  {
    "url": "_resources/img/course_catalog.jpg",
    "revision": "46eeab8e272f7ab46faeb171c52334ba"
  },
  {
    "url": "_resources/img/icon_arrow_black_right.png",
    "revision": "3145a1651b393d14a3e6217508cd0fe2"
  },
  {
    "url": "_resources/img/icon_arrow_black.png",
    "revision": "7bf794c4a9a41bc47815b43e7e049634"
  },
  {
    "url": "_resources/img/icon_arrow.png",
    "revision": "38c55de8048a5ecd12488715d3390771"
  },
  {
    "url": "_resources/img/icon_bullet_square_blue.gif",
    "revision": "ccb7cc8e5f3a1fda90093bf8c4e8546a"
  },
  {
    "url": "_resources/img/icon_bullet_square.gif",
    "revision": "8f4e8d6eca4624f4fac8656677c89e67"
  },
  {
    "url": "_resources/img/icon_check.png",
    "revision": "b12ad682a1fda13a3df066b8127e50f1"
  },
  {
    "url": "_resources/img/icon_close_white.png",
    "revision": "123bf644addd148310fd2d95dbd8e710"
  },
  {
    "url": "_resources/img/icon_close.png",
    "revision": "d4b091895059dfd0c668f35b7ce12642"
  },
  {
    "url": "_resources/img/icon_fb.png",
    "revision": "7a1057aae90c8e5cb6a217e194cf09fa"
  },
  {
    "url": "_resources/img/icon_ig.png",
    "revision": "0fbffb3c1d4d78cc2a40993bc82c685d"
  },
  {
    "url": "_resources/img/icon_linked.png",
    "revision": "9a7702fd918da583c2138fd5f430454e"
  },
  {
    "url": "_resources/img/icon_search.png",
    "revision": "614725819c23d26713347c3562fa6867"
  },
  {
    "url": "_resources/img/icon_tw.png",
    "revision": "2c52a360b71839a3659757b395282e74"
  },
  {
    "url": "_resources/img/logo_UCSD_white-50w.png",
    "revision": "fecc1f0b226d70722fbe2892ffbae9e1"
  },
  {
    "url": "_resources/img/logo_UCSD_white.png",
    "revision": "f22793a60a8854d276b9251fa43e0e04"
  },
  {
    "url": "_resources/img/logo_UCSD.png",
    "revision": "a016d37579828e6bab98bc85e5401616"
  },
  {
    "url": "_resources/img/placeholder_ig-50w.jpg",
    "revision": "6179c75e89f8b148658ceee82cf275f9"
  },
  {
    "url": "_resources/img/placeholder_ig.jpg",
    "revision": "2b0ceb626ac6c6db94f44193a2c4695d"
  },
  {
    "url": "_resources/img/placeholder_ig-50w.webp",
    "revision": "4637281asudiflasdhfewuilafewh8f"
  },
  {
    "url": "_resources/img/placeholder_ig.webp",
    "revision": "8eowfahsfy8aeow8hweoiul3wef666ea"
  },
  {
    "url": "_resources/img/tab_fun.jpg",
    "revision": "012cfd36ad5c0f6822d4d74e72f36799"
  },
  {
    "url": "_resources/img/tab_learn.jpg",
    "revision": "c71d1e1d6ba59d2dacbc6dbef702225c"
  },
  {
    "url": "_resources/img/tab_live.jpg",
    "revision": "cb30aa85e119c8ab6aef21b841243cb4"
  },
  {
    "url": "_resources/img/tab_work.jpg",
    "revision": "6dcfa9f692d109b35a70331477d48585"
  },
  {
    "url": "_resources/img/testimonial_four.jpg",
    "revision": "c56d0367a024f36ddb6c8ef62e2e6e14"
  },
  {
    "url": "_resources/img/testimonial_intro_mobile.jpg",
    "revision": "3cb8edbf5da3f6ebad8fd52d0236c515"
  },
  {
    "url": "_resources/img/testimonial_intro.png",
    "revision": "ea549e69748cb0c4281b151c63edccdf"
  },
  {
    "url": "_resources/img/testimonial_one.jpg",
    "revision": "06bedb5dd6f644631a6e41291807ad11"
  },
  {
    "url": "_resources/img/testimonial_three.jpg",
    "revision": "da43bd982f87113304ce5b1ed8318487"
  },
  {
    "url": "_resources/img/testimonial_two.jpg",
    "revision": "ae2fe85b8a5a1df9bd8cbe95598931e5"
  },
  {
    "url": "_resources/js/myscripts.js",
    "revision": "e67bbab4a5e87f2995b558786e68bebb"
  },
  {
    "url": "_resources/js/vendor/jquery.easings.min.js",
    "revision": "b4adc2012a44cb2096f6df47956bd089"
  },
  {
    "url": "_resources/js/vendor/jquery.matchHeight.js",
    "revision": "70e8936a2f2316fdff4170e69d8452ba"
  },
  {
    "url": "_resources/js/vendor/responsive-tabs.js",
    "revision": "6faf15d2b4f65932e294ac51456676fb"
  },
  {
    "url": "_resources/js/vendor/slick.min.js",
    "revision": "a25f2898e36ec3b3cb67d232a6fbd6c5"
  },
  {
    "url": "_resources/vid/vid-poster.jpg",
    "revision": "ed31fd7225d3f3e09ca4cbcb35bbd9a9"
  },
  {
    "url": "_resources/vid/ucsd-home.mp4",
    "revision": "8a2ue8euhfiewhafuiewhfoauiweh"
  },
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",
    "revision": "f03e5a3bf534f4a738bc350631fd05bd"
  },
  {
    "url": "hello.myfonts.net/count/31ba49.css",
    "revision": "81051bcc2cf1bedf378224b0a93e2877"
  },
  {
    "url": "hello.myfonts.net/robots.txt.css",
    "revision": "81051bcc2cf1bedf378224b0a93e2877"
  },
  {
    "url": "icon_192x192.jpg",
    "revision": "4d1f0449747f11611bd17644acc8232e"
  },
  {
    "url": "icon_512x512.jpg",
    "revision": "543c206ce3bbab1b6e3cfeb2dd2990f5"
  },
  {
    "url": "index.html",
    "revision": "236877fe485f7e4ded871186f8fce0bd"
  },
  {
    "url": "manifest.json",
    "revision": "d8ae85a7c9f6488b90c53d6e2ea2e5de"
  },
  {
    "url": "www.ucsd.edu/common/_emergency-broadcast/message.js",
    "revision": "350fd6ef6446635f7a8f608434a405ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
