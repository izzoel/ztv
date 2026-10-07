<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Primary HTML & Link Preview Meta Tags -->
        <title>ZTV Stream - Platform Streaming Film & Serial TV</title>
        <meta name="title" content="ZTV Stream - Platform Streaming Film & Serial TV">
        <meta name="description" content="Nonton film dan serial TV subtitle Indonesia kualitas HD gratis di ZTV Stream.">

        <!-- Open Graph / WhatsApp / Telegram / Facebook Preview -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://cinema.zetware.id/">
        <meta property="og:title" content="ZTV Stream - Platform Streaming Film & Serial TV">
        <meta property="og:description" content="Nonton film dan serial TV subtitle Indonesia kualitas HD gratis di ZTV Stream.">
        <meta property="og:site_name" content="ZTV Stream">

        <!-- Twitter Preview -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://cinema.zetware.id/">
        <meta property="twitter:title" content="ZTV Stream - Platform Streaming Film & Serial TV">
        <meta property="twitter:description" content="Nonton film dan serial TV subtitle Indonesia kualitas HD gratis di ZTV Stream.">

        {{-- Inline script to detect system dark mode preference and register ZTV Anti-Ad Service Worker (Cara 3) --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }

                // 1. Register ZTV Anti-Ad Service Worker
                if ('serviceWorker' in navigator) {
                    window.addEventListener('load', function() {
                        navigator.serviceWorker.register('/sw.js').then(function(reg) {
                            console.log('[ZTV Shield] Anti-Ad Service Worker Registered');
                        }).catch(function(err) {
                            console.warn('[ZTV Shield] SW registration failed:', err);
                        });
                    });
                }

                // 2. Client-side Pop-up & Ad Interceptor
                const AD_PATTERNS = [
                    'histats.com', 'acscdn.com', 'usrpubtrk.com', 'adexchangeclear.com',
                    'preferencenail.com', 'protrafficinspector.com', 'kettledroopingcontinuation.com',
                    'lt.talosempest.com', 'adeptspiritual.com', 'popads.net', 'popcash.net', 'adsterra'
                ];

                const nativeOpen = window.open;
                window.open = function(url, target, features) {
                    if (url && typeof url === 'string') {
                        const isAdDomain = AD_PATTERNS.some(function(domain) { return url.toLowerCase().includes(domain); });
                        if (isAdDomain) {
                            console.warn('[ZTV Shield] Blocked ad popup redirect:', url);
                            return null;
                        }
                    }
                    return nativeOpen.apply(this, arguments);
                };
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head />
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
