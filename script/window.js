function getElementByZIndex(zIndex) {
    const allElements = document.querySelectorAll('div');
    for (const element of allElements) {
        const elementZIndex = window.getComputedStyle(element).zIndex;
        if (elementZIndex === zIndex) {
            return element;
        }
    }
    return null;
}

let finder_code = `
<div id="sidebar"></div>
<div id="edge"></div>
<div id="content"></div>
<div id="toolbar">
    <div id="win-tool">
        <div id="close" onclick='exit("#finder", "finder")'></div>
        <div id="minimize" onclick="small('finder')"></div>
        <div id="zoom" onclick='big("finder")'></div>
    </div>
    <div id="toolbar-right-content">
        <div id="back-for-ward">
            <img id="wards" src="./images/chevron.backward.png" />
            <img id="wards" src="./images/chevron.forward.png" style="margin: 0;" />
        </div>
        <p id="title">Title</p>
        <div id="right-tools">
            <div id="item">
                <img src="./images/magnifyingglass.png" width="20" height="20" />
            </div>
        </div>
        <div id="toolbar-bottom-border"></div>
    </div>
</div>`;

let settings_code = `
<div id="sidebar">
    <div id="win-tool" style="top: 10px; left: 10px">
        <div id="close" onclick='exit("#settings", "settings")'></div>
        <div id="minimize" onclick="small('settings')"></div>
        <div id="zoom" onclick='big("settings")'></div>
    </div>
</div>
<div id="divider-edge"></div>
<div id="main">
    <div style="display: flex; flex-direction: row;">
        <img id="by-looking-new" src="./images/Sequoia-Day.jpg" width="160" height="90"
            style="border-radius: 8px; border: solid 3px white" />
        <div style="display: flex; flex-direction: column; justify-content: center;">
            <section id="content-frame" style="width: 305px; margin-top: 0;">
                <p id="wallpaper-looking-new">Sequoia</p>
                <div
                    style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                    <div id="btn" onclick="change_wall('auto')"></div>
                    <div id="btn" onclick="change_wall('day')"></div>
                    <div id="btn" onclick="change_wall('night')"></div>
                </div>
            </section>
            <section id="content-frame" style="width: 305px;">
                <p id="wallpaper-looking"></p>
                <div
                    style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                    <div id="btn"></div>
                </div>
            </section>
            <section id="content-frame" style="width: 305px; margin-bottom: auto; margin-top: 0;">
                <p id="wallpaper-looking"></p>
                <div
                    style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                    <div id="btn"></div>
                </div>
            </section>
        </div>
    </div>
    <section id="content-frame">
        <p id="sub-title"></p>
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
            <div id="btn" onclick="change_wall('bigsur')">Big Sur</div>
            <div id="btn" onclick="change_wall('monterey')">Monterey</div>
            <div id="btn" onclick="change_wall('ventura')">Ventura</div>
            <div id="btn" onclick="change_wall('sonoma')">Sonoma</div>
            <div id="btn" onclick="change_wall('sequoia')">Sequoia</div>
        </div>
    </section>
    <section id="content-frame">
        <p id="sub-title"></p>
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
            <div id="btn" onclick="setDock('hidden')" id="open-dock-hidden">点击开启</div>
        </div>
    </section>
    <section id="content-frame">
        <p id="sub-title">程序坞放大</p>
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
            <div id="btn" onclick="setDockZoom(true)" id="open-dock-hidden">点击开启</div>
            <div id="btn" onclick="setDockZoom(false)" id="open-dock-hidden">点击关闭</div>
        </div>
    </section>
        <section id="content-frame">
        <p id="sub-title">外观</p>
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
            <div id="btn" onclick="theme('light')" id="open-dock-hidden">浅色</div>
            <div id="btn" onclick="theme('dark')" id="open-dock-hidden">深色</div>
        </div>
    </section>
</div>`;

let safari_code = `<div id="safari-topbar">
    <div id="win-tool">
        <div id="close" onclick='exit("#safari-window", "safari")'></div>
        <div id="minimize" onclick="small('safari-window')"></div>
        <div id="zoom" onclick='big("safari-window")'></div>
    </div>
    <!-- <div id="page-using">
        <img src="./images/chevron.backward.png" style="margin-right: 8px; width: 13px; height: 16px" />
        <img src="./images/chevron.forward.png" style="width: 13px; height: 16px" />
    </div>
    <div id="page-tool"></div>
    <img src="./images/plus@10x.png" width="20" height="20" /> -->
</div>
<iframe id="main-safari" src="AboutMe/index.html" title="Webintosh - Come for macOS on line!">
</iframe>`;

let hardware_code = `<div id="win-tool" style="margin-top: 8px; margin-left: 8px;">
    <div id="close" onclick="exit('#hardware', 'hardware')"></div>
    <div id="none" style="margin: 0;"></div>
    <div id="none"></div>
</div>
<img src="./images/com.apple.macpro-2019 2.png" alt="macpro-2019" />
<h2>Mac Pro</h2>
<h5 style="margin-top: 20px; opacity: 0.7;" class="year">2019</h5>
<h5
    style="text-align: center; top: 87.5%; left: 50%; opacity: 0.6; transform: translate(-50%, -50%); width: 100%; height: auto; ">
    &trade;和&copy; 1983-2024 Apple Inc.<br>保留一切权利。</h5>`;
