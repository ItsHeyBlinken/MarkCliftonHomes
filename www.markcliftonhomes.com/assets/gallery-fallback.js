(function () {
  const IMAGES = [
    "5e6802_7634a6635d794d029709ccc4876d7acb_mv2.jpg",
    "5e6802_5e6a621819a6454bb157390e5fbe1575_mv2.jpg",
    "5e6802_1316b78544b9442a8915476695942a47_mv2.jpg",
    "5e6802_2f7f80603e744e2695e2669176329c66_mv2.jpg",
    "5e6802_b3c9f7251e7d4b50845de7e0929ed54f_mv2.jpg",
    "5e6802_4c0deac98a694351aca58617dc35a31f_mv2.jpg",
    "5e6802_4afe474b6a564b9dab6c2e32006e8f73_mv2.jpg",
    "5e6802_af9e9493b13d45d2b755447c740164a1_mv2.jpg",
    "5e6802_4e91b4a0db4541109b34e85d01068619_mv2.jpg",
    "5e6802_511f5592a3484f1983cb87104d5588aa_mv2.jpg",
    "5e6802_0b36953e0f984ee5820363b68d4b6db3_mv2.jpg",
    "5e6802_8a39667b96d748e7bfb10e7c827fc193_mv2.jpg",
    "5e6802_f3d9cff778a74f5fb124c9abc4788b69_mv2.jpg",
    "5e6802_3be160bdc4ed4de89f6c57c3fe3780ed_mv2.jpg",
    "5e6802_8a3e65e2c6bb4836a3144ecff816252e_mv2.jpg",
    "5e6802_da789813586349998ae5bad197fa10d2_mv2.jpg",
    "5e6802_8351245587b84e63aa0b03049ebbaf39_mv2.jpg",
    "5e6802_7cb2147ce4894ed688807994d36d8fad_mv2.jpg",
    "5e6802_2c6631c784814686929bc040b7ea0ad1_mv2.jpg",
    "5e6802_3f6649f04af241aa90c97a116b9b24bf_mv2.jpg",
    "5e6802_027625058902403e82f3ea98a7010533_mv2.jpg",
    "5e6802_96443b9cbc0f427da412a9611ce74ebc_mv2.jpg",
    "5e6802_29f7678d62db46d3b06fd6d0120368d0_mv2.jpg",
    "5e6802_4cee8ad2d58e493e9abfdf1af411946b_mv2.jpg",
    "5e6802_8f3854ac39ca430dbe4882533f485028_mv2.jpg",
    "5e6802_c02e0d7f3ddf42ae8e2c0018f6788ea5_mv2.jpg",
    "5e6802_6bfc69e89fe54247a6bfa87fe5c4c08e_mv2.jpg",
    "5e6802_4ec09568bb88489d9473006cc804f733_mv2.jpg",
    "5e6802_362b574d445d4286ac9bd47de67bb487_mv2.jpg",
    "5e6802_a08c77f815d34b27902f78ec257aaafc_mv2.jpg",
    "5e6802_b17df1abaa87453fa572e15a4d498157_mv2.jpg",
    "5e6802_5ffd36e775624dd48a862ad37a1d5f6e_mv2.jpg",
    "5e6802_b98eddf194e14b4890b4ee6dfa52983b_mv2.jpg",
    "5e6802_a3617927bf87400d8167a1ba13bf6a51_mv2.jpg",
    "5e6802_5208027cf6994e4a9fce29fc658348cb_mv2.jpg",
    "5e6802_2484f37f1fa2407dafcb1ec383ea5307_mv2.jpg",
    "5e6802_db5c2d1058ca4647b69e5c993233d8dc_mv2.jpg",
    "5e6802_7c54217580f044d2848cee8890baa444_mv2.jpg",
    "5e6802_9b6c1481c33e402ab5cccd89861a624a_mv2.jpg",
    "5e6802_b1a819c1d3864ac092df682888ce7d29_mv2.jpg",
    "5e6802_4728764aa6c048b085a4842ec3191483_mv2.jpg",
    "5e6802_4851d6f1ef9b4b29b285a1b03577ef4d_mv2_d_4831_3451_s_4_2.jpg",
    "5e6802_d348b446fe104ee8b2ff6f62c39d39fb_mv2_d_4513_3224_s_4_2.jpg",
    "5e6802_2181c6d17129431d9f4241a0b8ef7411_mv2_d_4872_3480_s_4_2.jpg",
    "5e6802_b4a6ea76ef994303920752c1a1f0e21f_mv2_d_3527_4290_s_4_2.jpg",
    "5e6802_812c78c54bbd4cd48a1313c0b550f103_mv2_d_4843_3459_s_4_2.jpg",
    "5e6802_492f4e8c72d046fab8121abc6bbc83cc_mv2_d_4737_4737_s_4_2.jpg",
    "5e6802_8541cf2eb6ed42b194a7214a7609e92f_mv2_d_4912_3275_s_4_2.jpg",
    "5e6802_382d396e2e0547c6a6eb75e97ee5a795_mv2_d_4894_7333_s_4_2.jpg",
    "5e6802_6f950102ad65459bb40f597f5e4974c8_mv2_d_4871_3479_s_4_2.jpg",
    "5e6802_0a2a4357161441b09cb9a25a6e6e2801_mv2_d_4895_4895_s_4_2.jpg",
    "5e6802_c2a048951746462caa0f79f98e9cbafc_mv2_d_7360_4912_s_4_2.jpg",
    "5e6802_d3e33fbfa92f481caff58c268ba029d9_mv2_d_4831_4831_s_4_2.jpg",
    "5e6802_a9939341d635435799f3416e1829c758_mv2_d_7272_4853_s_4_2.jpg",
    "5e6802_94bd13d4cffa47f78b0b7892dff88f24_mv2_d_4605_4605_s_4_2.jpg",
    "5e6802_afb5dac4c090418aae6b2205cc99be43_mv2_d_7360_4912_s_4_2.jpg",
    "5e6802_95fe641dfc884bfd80b072c78bbbec0a_mv2_d_4883_4883_s_4_2.jpg",
    "5e6802_eab643556c9d4ecd848e82aab11b5643_mv2_d_4878_3902_s_4_2.jpg",
    "5e6802_4b8425f158334820a44edaade4f62840_mv2_d_4893_3495_s_4_2.jpg",
    "5e6802_7e59d985e0284885bc421b3e185f1e99_mv2_d_3335_3335_s_4_2.jpg",
    "5e6802_31581c7167224148a6de5e268a53e474_mv2_d_3152_3833_s_4_2.jpg",
    "5e6802_f68ca1cf147f4470a39974a908ea8b39_mv2_d_3905_5851_s_4_2.jpg",
    "5e6802_c0779383d71e439a9c31353ab3de88d7_mv2_d_4873_4873_s_4_2.jpg",
    "5e6802_7bcfb50c61a04fb9831e6bd6a65b6737_mv2_d_5424_3874_s_4_2.jpg",
    "5e6802_69d8314a79f04da8b7a9efba0e69ab8f_mv2_d_6197_3873_s_4_2.jpg",
    "5e6802_4acaf0247f3c4862ab0e29cb0ea74b0c_mv2.jpg",
    "5e6802_bee8eba19ed4416aae80fe873dfb2f1e_mv2.jpg",
    "5e6802_415245a395284adeb3c88c5aca569221_mv2.jpg",
    "5e6802_b8839ac3bdc84d85b4cd7d696d722246_mv2.jpg",
    "5e6802_99446472e32f45f38cff9a33c560d9f0_mv2.jpg",
    "5e6802_c00bb4fb8dd54791914078f7f6e315ab_mv2_d_5642_4030_s_4_2.jpg",
    "5e6802_f7c9e711bbad45bcba20d358ef563198_mv2.jpg",
    "5e6802_46235c1e9afa40bf9350189852a55ddd_mv2_d_5843_4174_s_4_2.jpg",
    "5e6802_31d670ca11c940e5a075db393affd7fb_mv2_d_4912_7360_s_4_2.jpg",
    "5e6802_7cf76c13647c4fee9808720f4ea2a022_mv2_d_4737_5167_s_4_2.jpg",
    "5e6802_7a8624b937a1423e994a9b5bce92623a_mv2_d_4537_5671_s_4_2.jpg",
    "5e6802_ef3eb831667c4f2fa8c34883436bbaee_mv2_d_4893_6116_s_4_2.jpg",
    "5e6802_04d6cef952054db58f807fc08b29f83c_mv2_d_4775_5757_s_4_2.jpg",
    "5e6802_00918dce97dc4554a45f7efa57570a37_mv2_d_4912_6140_s_4_2.jpg",
    "5e6802_09ddc2e4658e48c3b01c92004ecac65d_mv2_d_4912_7360_s_4_2.jpg",
    "5e6802_fb521895860842e984e01e64f67c43af_mv2_d_4825_6031_s_4_2.jpg",
    "5e6802_2b107549e4744c2cb8c71a30de9701db_mv2_d_4465_6251_s_4_2.jpg",
    "5e6802_cc93f788794b44769d33e524c19e2795_mv2_d_4289_6426_s_4_2.jpg",
    "5e6802_ee183e8aa0c54b0e8dc038246ca311c7_mv2_d_4912_7360_s_4_2.jpg",
    "5e6802_afbc4dd8abed45f8b9f91a8e09e454e9_mv2_d_4912_6140_s_4_2.jpg",
    "5e6802_42556ab54b394414b5254e4c8600c107_mv2_d_4834_6042_s_4_2.jpg",
    "5e6802_82cf7fa32340406ca973af998c1071a8_mv2_d_3443_2298_s_2.jpg",
    "5e6802_a3fdc62b34b348e59fb91510dd71c98b_mv2_d_4594_5742_s_4_2.jpg",
    "5e6802_f82941bf41a94c49a078fe0fb8e20f31_mv2_d_5622_3516_s_4_2.jpg",
    "5e6802_4368663db0c54f8d8ef10c3639b0449d_mv2_d_7177_4790_s_4_2.jpg",
    "5e6802_873b4cbf9d8346a6846a4eaf6021c8e8_mv2_d_7253_4841_s_4_2.jpg",
    "5e6802_c23086aecf31473080ddb994134cb3dd_mv2_d_4912_4912_s_4_2.jpg",
    "5e6802_0b8e0a72a95c4cb887de3571c775bdae_mv2_d_3711_2477_s_4_2.jpg",
    "5e6802_bbe53ddac4aa4d54a67a8ee1adb84ed3_mv2_d_4361_6534_s_4_2.jpg",
    "5e6802_622d7a08869e4a7cbe1de74aa7d99c67_mv2_d_7323_4887_s_4_2.jpg",
    "5e6802_6cb117d3dea74047b99bf7a1a50c3905_mv2_d_7285_4098_s_4_2.jpg",
    "5e6802_1611d79ffd2d4f2c8a78f19ea0262445_mv2_d_4863_6078_s_4_2.jpg",
    "5e6802_31c54f3faff44998aa112e0840f2c8bb_mv2_d_3573_3573_s_4_2.jpg",
    "5e6802_4db321846ef542ceb7c1b49303501da7_mv2_d_4413_6612_s_4_2.jpg",
    "5e6802_d4a38ba1fcf142b49d405e526f26c893_mv2_d_7360_4912_s_4_2.jpg",
    "5e6802_378eece25ebc43cb97d084557f4ef611_mv2_d_6140_4912_s_4_2.jpg",
    "5e6802_e9080b88df1c4f288834ec739e8d145d_mv2_d_7360_4912_s_4_2.jpg",
    "5e6802_480e56d383c14cbc8f8d154a8c22d9ba_mv2_d_4451_4451_s_4_2.jpg",
    "5e6802_aba851fb0e6246799b136d22241f0285_mv2_d_4330_3093_s_4_2.jpg",
    "5e6802_5f2668b675ef431e902aee35ee55e31d_mv2_d_4912_6140_s_4_2.jpg",
    "5e6802_55c95c9e04564e3da9bea374b49ceb94_mv2_d_4886_6107_s_4_2.jpg",
    "5e6802_a48015069bab4e558361139103814be6_mv2_d_4912_4912_s_4_2.jpg",
    "5e6802_019fba83195c4ad883b436b79b92ae39_mv2_d_6594_4401_s_4_2.jpg",
    "5e6802_1ca70b03b1f34858b0c4eb7f0a05b92b_mv2_d_4912_7360_s_4_2.jpg",
    "5e6802_1e98a8aeb50c44beaceeca293badb600_mv2_d_4835_7132_s_4_2.jpg",
    "5e6802_59191e138b244d38b58e34587324904a_mv2_d_4770_4770_s_4_2.jpg",
    "5e6802_b8c9b7fde71d4d048d27bc94b360c53e_mv2_d_4642_3316_s_4_2.jpg",
  ];

  const ROOT_SELECTOR = "#comp-j02rsi83";
  const MEDIA_BASE = "../vendor/static.wixstatic.com/media/";

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function visibleCount() {
    const w = window.innerWidth || 1200;
    if (w <= 640) return 1;
    if (w <= 980) return 2;
    return 3;
  }

  function build(root) {
    const gallery = document.createElement("div");
    gallery.className = "mch-gallery";
    gallery.setAttribute("data-mch-gallery", "1");

    const viewport = document.createElement("div");
    viewport.className = "mch-gallery__viewport";

    const track = document.createElement("div");
    track.className = "mch-gallery__track";

    for (const filename of IMAGES) {
      const item = document.createElement("div");
      item.className = "mch-gallery__item";

      const img = document.createElement("img");
      img.className = "mch-gallery__img";
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = "";
      img.src = MEDIA_BASE + filename;

      item.appendChild(img);
      track.appendChild(item);
    }

    viewport.appendChild(track);

    const prev = document.createElement("button");
    prev.className = "mch-gallery__btn mch-gallery__btn--prev";
    prev.type = "button";
    prev.setAttribute("aria-label", "Previous");
    prev.innerHTML = '<span class="mch-gallery__chev" aria-hidden="true"></span>';

    const next = document.createElement("button");
    next.className = "mch-gallery__btn mch-gallery__btn--next";
    next.type = "button";
    next.setAttribute("aria-label", "Next");
    next.innerHTML = '<span class="mch-gallery__chev" aria-hidden="true"></span>';

    gallery.appendChild(viewport);
    gallery.appendChild(prev);
    gallery.appendChild(next);

    let index = 0;

    function update() {
      const count = visibleCount();
      const maxStart = Math.max(0, IMAGES.length - count);
      index = clamp(index, 0, maxStart);

      // Determine item width based on track's computed layout.
      const firstItem = track.querySelector(".mch-gallery__item");
      if (!firstItem) return;
      const itemWidth = firstItem.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0") || 0;
      const x = -index * (itemWidth + gap);
      track.style.transform = `translate3d(${x}px, 0, 0)`;

      prev.disabled = index <= 0;
      next.disabled = index >= maxStart;
    }

    prev.addEventListener("click", () => {
      index -= 1;
      update();
    });
    next.addEventListener("click", () => {
      index += 1;
      update();
    });

    window.addEventListener("resize", () => update());
    window.addEventListener("load", () => update());
    update();

    // Replace Wix iframe with fallback carousel.
    root.replaceWith(gallery);
  }

  function init() {
    const root = document.querySelector(ROOT_SELECTOR);
    if (!root) return;
    // Avoid double-init.
    if (document.querySelector("[data-mch-gallery='1']")) return;
    build(root);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

