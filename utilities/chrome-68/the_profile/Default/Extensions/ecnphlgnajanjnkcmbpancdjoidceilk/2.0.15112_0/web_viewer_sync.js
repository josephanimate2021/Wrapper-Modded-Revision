var kami_user,autoload=localStorage.getItem("notable.settings.autoload"),fileSchemeRequestDisabled=localStorage.getItem("notable.settings.fileSchemeRequestDisabled");try{kami_user=JSON.parse(localStorage.getItem("notable.user"))}catch{}function onSettingsUpdated(e){var t=["autoload","fileSchemeRequestDisabled"];for(var a in t){var s=t[a];localStorage.setItem("notable.settings."+s,e[s]),window[s]=e[s].toString()}}function onUserUpdated(e){kami_user=e;var t=JSON.stringify(e);localStorage.setItem("notable.user",t);var a=chrome.storage;null!=a&&a.sync.set({"notable.user":e})}function onBetaFeaturesUpdated(e){var t=["enableClassroomAssignmentEditSyncing"],a=chrome.storage;for(var s in t){var n=t[s],o="notable.betaFeatures."+n;if(null!=a){var r=a.sync,i={};i[o]=e[n],r.set(i)}}}chrome.runtime.onMessageExternal.addListener((function(e,t,a){"object"==typeof e&&("settings"in e?onSettingsUpdated(e.settings):"user"in e?onUserUpdated(e.user):"betaFeatures"in e&&onBetaFeaturesUpdated(e.betaFeatures))}));