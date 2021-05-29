user_pref("dom.ipc.processCount", 8);
user_pref("services.sync.prefs.dangerously_allow_arbitrary", true);

user_pref("general.warnOnAboutConfig", false); // XUL/XHTML version
user_pref("browser.aboutConfig.showWarning", false); // HTML version [FF71+]

user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
user_pref("browser.library.activity-stream.enabled", false);

user_pref("permissions.default.geo", 0);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
user_pref("intl.charset.fallback.override", "windows-1252");

user_pref("extensions.update.enabled", true);
user_pref("app.update.auto", true);
   user_pref("extensions.update.autoUpdateDefault", true);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("browser.search.update", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE] above FF58+
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [FF58+]
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
user_pref("network.connectivity-service.enabled", false);

user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");

user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.allowOverride", false);

user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("browser.ping-centre.telemetry", false);
user_pref("extensions.screenshots.disabled", true); // [FF55+]
user_pref("extensions.screenshots.upload-disabled", true); // [FF60+]
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
user_pref("extensions.webcompat-reporter.enabled", false);

user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+]
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.send_pings", false); // [DEFAULT: false]
user_pref("browser.send_pings.require_same_host", true);

user_pref("network.dns.disableIPv6", false);
// user_pref("network.http.spdy.enabled", false);
// user_pref("network.http.spdy.enabled.deps", false);
// user_pref("network.http.spdy.enabled.http2", false);
// user_pref("network.http.spdy.websockets", false); // [FF65+]
user_pref("network.http.altsvc.enabled", true);
user_pref("network.http.altsvc.oe", true);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.ftp.enabled", false);
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF]

user_pref("keyword.enabled", true);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("layout.css.visited_links_enabled", false);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// user_pref("browser.urlbar.suggest.history", false);
// user_pref("browser.urlbar.suggest.bookmark", false);
// user_pref("browser.urlbar.suggest.openpage", false);
// user_pref("browser.urlbar.maxRichResults", 0);
// user_pref("browser.urlbar.autoFill", false);
// user_pref("browser.urlbar.oneOffSearches", false);
user_pref("browser.formfill.enable", false);
// user_pref("places.history.enabled", false);
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.previews.enable", true);

user_pref("signon.rememberSignons", false);
user_pref("security.ask_for_password", 2);
user_pref("security.password_lifetime", 5);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);

user_pref("browser.cache.disk.enable", false);
// user_pref("browser.cache.memory.enable", false);
// user_pref("browser.cache.memory.capacity", 0); // [HIDDEN PREF ESR]
// user_pref("permissions.memory_only", true); // [HIDDEN PREF]
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 16384);

// user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.privacy_level", 2);
// user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.sessionstore.interval", 30000);
user_pref("toolkit.winRegisterApplicationRestart", false);

user_pref("browser.shell.shortcutFavicons", false);
// user_pref("browser.chrome.site_icons", false);
// user_pref("alerts.showFavicons", false); // [DEFAULT: false]

user_pref("security.ssl.require_safe_negotiation", true);
// user_pref("security.tls.version.min", 3);
// user_pref("security.tls.version.max", 4);
user_pref("security.tls.version.enable-deprecated", false);
user_pref("security.ssl.disable_session_identifiers", true); // [HIDDEN PREF]
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("security.tls.enable_0rtt_data", false);

user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.enabled", 2);
user_pref("security.OCSP.require", true);

user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.family_safety.mode", 0);
// user_pref("security.nocertdb", true); // [HIDDEN PREF]
user_pref("security.cert_pinning.enforcement_level", 2);

user_pref("security.mixed_content.block_active_content", true); // [DEFAULT: true]
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("dom.security.https_only_mode", true);

user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.rsa_aes_128_sha", false);
user_pref("security.ssl3.rsa_aes_256_sha", false);

user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.ssl_override_behavior", 2);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.insecure_connection_icon.enabled", true); // [FF59+] [DEFAULT: true FF70+]
user_pref("security.insecure_connection_text.enabled", true); // [FF60+]

user_pref("browser.display.use_document_fonts", 1);
user_pref("gfx.downloadable_fonts.enabled", true); // [FF41+]
user_pref("gfx.downloadable_fonts.fallback_delay", -1);
user_pref("gfx.font_rendering.opentype_svg.enabled", true);
user_pref("gfx.font_rendering.graphite.enabled", true);
// user_pref("font.system.whitelist", ""); // [HIDDEN PREF]

user_pref("network.http.sendRefererHeader", 2); // [DEFAULT: 2]
user_pref("network.http.referer.trimmingPolicy", 1); // [DEFAULT: 0]
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // [DEFAULT: 0]
// user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]
user_pref("network.http.referer.defaultPolicy", 2); // [DEFAULT: 3]
user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [DEFAULT: 2]
user_pref("network.http.referer.hideOnionSource", true);
user_pref("privacy.donottrackheader.enabled", false);

user_pref("privacy.userContext.ui.enabled", false);
user_pref("privacy.userContext.enabled", false);
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", false);

user_pref("plugin.state.flash", 1);
user_pref("media.gmp-provider.enabled", true);
user_pref("media.gmp-widevinecdm.visible", true);
user_pref("media.gmp-widevinecdm.enabled", true);
user_pref("media.eme.enabled", true);

user_pref("media.peerconnection.enabled", true);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true); // [FF51+]
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // [FF70+]

user_pref("webgl.disabled", false);
user_pref("webgl.enable-webgl2", true);
user_pref("webgl.min_capability_mode", false);
user_pref("webgl.disable-fail-if-major-performance-caveat", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("permissions.default.camera", 0);
user_pref("permissions.default.microphone", 0);
user_pref("media.autoplay.default", 1);
user_pref("media.autoplay.enabled.user-gestures-needed", false);

user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true); // [DEFAULT: true]
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true); // bookmarks toolbar
user_pref("dom.disable_window_open_feature.resizable", true); // [DEFAULT: true]
user_pref("dom.disable_window_open_feature.status", true); // [DEFAULT: true]
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("full-screen-api.enabled", true);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_allowed_events", "click dblclick");

user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.push.enabled", false);
// user_pref("permissions.default.desktop-notification", 2);

user_pref("dom.event.contextmenu.enabled", true);
user_pref("dom.event.clipboardevents.enabled", true);
user_pref("dom.allow_cut_copy", true);
user_pref("dom.disable_beforeunload", true);
user_pref("dom.vibrator.enabled", false);
user_pref("javascript.options.asmjs", true);
user_pref("javascript.options.ion", true);
user_pref("javascript.options.baselinejit", true);
user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
user_pref("javascript.options.wasm", true);
user_pref("dom.IntersectionObserver.enabled", false);
user_pref("dom.targetBlankNoOpener.enabled", true);

user_pref("dom.battery.enabled", false);
user_pref("media.navigator.enabled", true);
user_pref("gfx.direct2d.disabled", false); // [WINDOWS]
user_pref("layers.acceleration.disabled", false);
user_pref("dom.webaudio.enabled", true);
user_pref("media.media-capabilities.enabled", true);
user_pref("dom.vr.enabled", false);
user_pref("permissions.default.xr", 0);

user_pref("accessibility.force_disabled", 1);
user_pref("beacon.enabled", false);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
user_pref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false); // [DEFAULT: false FF76+]
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("mathml.disabled", false);
user_pref("svg.disabled", false);
user_pref("middlemouse.contentLoadURL", false);
user_pref("network.http.redirection-limit", 10);
user_pref("permissions.default.shortcuts", 0);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("network.IDN_show_punycode", true);
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false]
user_pref("permissions.delegation.enabled", false);

user_pref("browser.download.folderList", 2);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.hide_plugins_without_extensions", false);
user_pref("browser.download.forbid_open_with", false);

user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
// user_pref("extensions.webextensions.restrictedDomains", "");

user_pref("security.csp.enable", true); // [DEFAULT: true]
user_pref("security.dialog_enable_delay", 700);

user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.contentblocking.category", "custom");
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // [FF58+]
user_pref("network.cookie.lifetimePolicy", 0);
user_pref("dom.storage.enabled", true);
user_pref("browser.cache.offline.enable", true);
user_pref("dom.caches.enabled", true);
user_pref("dom.storageManager.enabled", true);
user_pref("dom.storage_access.enabled", true);

user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", false); // see note above
user_pref("privacy.clearOnShutdown.formdata", true); // Form & Search History
user_pref("privacy.clearOnShutdown.history", false); // Browsing & Download History
user_pref("privacy.clearOnShutdown.offlineApps", false); // Offline Website Data
user_pref("privacy.clearOnShutdown.sessions", true); // Active Logins
user_pref("privacy.clearOnShutdown.siteSettings", false); // Site Preferences
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
// user_pref("privacy.cpd.downloads", true); // not used, see note above
user_pref("privacy.cpd.formdata", true); // Form & Search History
user_pref("privacy.cpd.history", true); // Browsing & Download History
user_pref("privacy.cpd.offlineApps", true); // Offline Website Data
user_pref("privacy.cpd.passwords", true); // this is not listed
user_pref("privacy.cpd.sessions", true); // Active Logins
user_pref("privacy.cpd.siteSettings", true); // Site Preferences
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.cpd.openWindows", true);
user_pref("privacy.sanitize.timeSpan", 0);

user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true); // [DEFAULT: true]
user_pref("privacy.firstparty.isolate.block_post_message", true); // [HIDDEN PREF ESR]

user_pref("privacy.resistFingerprinting", false);
// user_pref("privacy.window.maxInnerWidth", 1000);
// user_pref("privacy.window.maxInnerHeight", 1000);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN PREF]
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]
// user_pref("privacy.resistFingerprinting.letterboxing.dimensions", ""); // [HIDDEN PREF]
user_pref("browser.startup.blankWindow", true);

user_pref("dom.maxHardwareConcurrency", 2);
user_pref("dom.enable_resource_timing", true);
user_pref("dom.enable_performance", true);
user_pref("device.sensors.enabled", false);
user_pref("browser.zoom.siteSpecific", false);
// user_pref("dom.gamepad.enabled", false);
user_pref("dom.netinfo.enabled", false); // [DEFAULT: true on Android]
user_pref("media.webspeech.synth.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 2);
user_pref("media.ondevicechange.enabled", false);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("dom.w3c_pointer_events.enabled", false);
user_pref("ui.use_standins_for_native_colors", true);
user_pref("ui.systemUsesDarkTheme", 0); // [HIDDEN PREF]

user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // What's New page after updates
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.download.autohideButton", true); // [FF57+]
user_pref("toolkit.cosmeticAnimations.enabled", false); // [FF55+]
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] allow userChrome/userContent
user_pref("accessibility.typeaheadfind", false); // enable "Find As You Type"
user_pref("clipboard.autocopy", false); // disable autocopy default [LINUX]
user_pref("layout.spellcheckDefault", 2); // 0=none, 1-multi-line, 2=multi-line & single-line
user_pref("browser.backspace_action", 2); // 0=previous page, 1=scroll up, 2=do nothing
user_pref("browser.tabs.closeWindowWithLastTab", true);
user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmarks in a new tab [FF57+]
user_pref("browser.urlbar.decodeURLsOnCopy", true); // see bugzilla 1320061 [FF53+]
user_pref("general.autoScroll", false); // middle-click enabling auto-scrolling [DEFAULT: false on Linux]
user_pref("ui.key.menuAccessKey", 0); // disable alt key toggling the menu bar [RESTART]
user_pref("view_source.tab", true); // view "page/selection source" in a new window [FF68+, FF59 and under]
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New [FF69+]
user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
user_pref("identity.fxaccounts.enabled", true); // Firefox Accounts & Sync [FF60+] [RESTART]
user_pref("reader.parse-on-load.enabled", true); // Reader View
user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // disable CFR [FF67+]
  // [SETTING] General>Browsing>Recommend extensions as you browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR [FF67+]
  // [SETTING] General>Browsing>Recommend features as you browse
user_pref("network.manage-offline-status", false); // see bugzilla 620472
user_pref("xpinstall.signatures.required", true); // enforced extension signing (Nightly/ESR)

// user_pref("gfx.downloadable_fonts.woff2.enabled", false);
user_pref("plugins.click_to_play", true); // [DEFAULT: true FF25+]
// user_pref("media.autoplay.allow-muted", false);
user_pref("devtools.webide.enabled", false); // [DEFAULT: false FF70+]
user_pref("devtools.webide.autoinstallADBExtension", false); // [FF64+]
user_pref("offline-apps.allow_by_default", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("toolkit.telemetry.hybridContent.enabled", false); // [FF59+]
user_pref("dom.indexedDB.enabled", true); // [DEFAULT: true]
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
// user_pref("geo.wifi.logging.enabled", true); // [HIDDEN PREF]
user_pref("privacy.userContext.longPressBehavior", 0);
user_pref("webgl.disable-extensions", false);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");

user_pref("fission.autostart", true);
user_pref("gfx.webrender.all", true);

user_pref("media.ffmpeg.low-latency.enabled", true);
