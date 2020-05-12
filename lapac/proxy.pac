
     function FindProxyForURL(url, host) {

         if (dnsDomainIs(host, "*.lausd.net*"))
                return "DIRECT";

        if (dnsDomainIs(host, "*.lausd.awmdm.com*"))
                return "DIRECT";

        if (dnsDomainIs(host, "lausd.net"))
                return "DIRECT";

        if (dnsDomainIs(host, "lausd.awmdm.com"))
                return "DIRECT";
                
        if (dnsDomainIs(host, "*.awmdm.com"))
                return "DIRECT";        

        if (shExpMatch(url, "*globalprotect.lausd.net*"))
                return "DIRECT";

        if (dnsDomainIs(host, "globalprotect.lausd.net"))
                return "DIRECT";

        if (dnsDomainIs(host, "globalprotect2.lausd.net"))
                return "DIRECT";

        if (shExpMatch(url, "http://cp-c3-cpg-ob-vip.lausd.net/*"))
                return "DIRECT";
        
        if (dnsDomainIs(host, "ocsp.digicert.com"))
                return "DIRECT";
        
        if (dnsDomainIs(host, "login.microsoftonline.com"))
                return "DIRECT";
        
        if (dnsDomainIs(host, "*.manage.microsoft.com"))
                return "DIRECT";
                
        if (dnsDomainIs(host, "*.mp.microsoft.com"))
                return "DIRECT";
                
        if (dnsDomainIs(host, "*.azureedge.net"))
                return "DIRECT";
                
        if (isInNet(host, "17.0.0.0", "255.0.0.0") ||
            (shExpMatch(host, "apple.com") || shExpMatch(host, "*.apple.com")) ||
            (shExpMatch(host, "itunes.com") || shExpMatch(host, "*.itunes.com")) ||
            (shExpMatch(host, "icloud.com") || shExpMatch(host, "*.icloud.com")) ||
            (shExpMatch(host, "omtrdc.net") || shExpMatch(host, "*.omtrdc.net")) ||
            (shExpMatch(host, "mzstatic.com") || shExpMatch(host, "*.mzstatic.com")))
                return "DIRECT";

        if (shExpMatch(url, "phobos.apple.com")||
                shExpMatch(url, "deimos3.apple.com")||
                shExpMatch(url, "albert.apple.com")||
                shExpMatch(url, "gs.apple.com")||
                shExpMatch(url, "*.apple.com")||
                shExpMatch(url, "*.itunes.apple.com")||
                shExpMatch(url, "ax.itunes.apple.com"))
                        return "DIRECT";

    if (shExpMatch(url, "https:*"))
                return "PROXY gpp.lausd.net:993";

    return "PROXY gpp.lausd.net:993";
      }
   