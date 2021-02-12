/**
 * Analytics
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the LICENSE.md file.
 *
 * @author Marcel Scherello <audioplayer@scherello.de>
 * @copyright 2020 Marcel Scherello
 */
/** global: OCA */
/** global: OCP */
/** global: OC */
'use strict';

if (!OCA.Analytics) {
    /**
     * @namespace
     */
    OCA.Analytics = {};
}
/**
 * @namespace OCA.Analytics.Wizzard
 */
OCA.Analytics.Wizzard = {
    sildeArray: [
        '',
        'wizzard-start',
        'wizzard-charts',
        'wizzard-filter',
        'wizzard-datasource',
        'wizzard-dataload',
        'wizzard-final'
    ],
    currentSlide: 0,

    show: function () {
        OCA.Analytics.Wizzard.currentSlide = 0;
        let wizzard = document.importNode(document.getElementById('wizzardDialog').content, true);
        document.getElementById('content').appendChild(wizzard);
        document.getElementById('wizzardNext').addEventListener('click', OCA.Analytics.Wizzard.next);
        document.getElementById('wizzardPrevious').addEventListener('click', OCA.Analytics.Wizzard.previous);
        OCA.Analytics.Wizzard.next();
    },

    next: function () {
        if (OCA.Analytics.Wizzard.currentSlide < OCA.Analytics.Wizzard.sildeArray.length - 1) {
            OCA.Analytics.Wizzard.currentSlide++;
            OCA.Analytics.Wizzard.showPage();
        }
    },

    previous: function () {
        if (OCA.Analytics.Wizzard.currentSlide !== 1) {
            OCA.Analytics.Wizzard.currentSlide--;
            OCA.Analytics.Wizzard.showPage();
        }
    },

    close: function () {
        OCA.Analytics.Wizzard.dismiss();
        document.getElementById('firstrunwizard').remove();
    },

    demo: function () {
        let thresholds = '{"dataset":{"name":"Demo: Thresholds","type":2,"link":"{}","visualization":"table","chart":"","dimension1":"Type","dimension2":"Threshold","dimension3":"Value","subheader":"Thresholds can be used to highlight data. Using the notification threshold, push messages are being sent","chartoptions":"","dataoptions":"","filteroptions":"{}","value":"Value"},"dataload":[{"id":105,"user_id":"admin","dataset":103,"datasource":3,"name":"test github","option":"{\\"user\\":\\"a\\",\\"repository\\":\\"a\\",\\"limit\\":\\"1\\",\\"timestamp\\":\\"true\\",\\"delete\\":\\"false\\"}","schedule":""}],"threshold":[{"id":94,"dimension1":"Threshold","dimension2":null,"value":"1.00","option":"=","severity":4},{"id":95,"dimension1":"Threshold","dimension2":null,"value":"2.00","option":"=","severity":3},{"id":97,"dimension1":"Threshold","dimension2":null,"value":"4.00","option":"=","severity":1},{"id":98,"dimension1":"Threshold","dimension2":null,"value":"3.00","option":">=","severity":2}],"favorite":"","data":[["Normal value","none","3.00"],["Threshold","green","1.00"],["Threshold","none","0.00"],["Threshold","notification","4.00"],["Threshold","red","3.00"],["Threshold","yellow","2.00"]],"favorite":"true"}';
        OCA.Analytics.Navigation.importDataset(null, thresholds);

        let population = '{"dataset":{"name":"Demo: Population Data","type":4,"link":"{\\"link\\":\\"https:\\/\\/raw.githubusercontent.com\\/Rello\\/analytics\\/master\\/sample_data\\/sample1.csv\\",\\"columns\\":\\"\\",\\"offset\\":\\"\\"}","visualization":"ct","chart":"line","dimension1":"","dimension2":"","dimension3":null,"subheader":"Realtime CSV Data from GitHub via the \\"Extrernal URL\\" datasource","chartoptions":"","dataoptions":"","filteroptions":null,"value":""},"dataload":[],"threshold":[],"favorite":"true"}';
        OCA.Analytics.Navigation.importDataset(null, population);

        let github = '{"dataset":{"name":"Demo: Analytics Downloads","type":3,"link":"{\\"user\\":\\"rello\\",\\"repository\\":\\"analytics\\",\\"limit\\":\\"10\\",\\"timestamp\\":\\"false\\"}","visualization":"ct","chart":"column","dimension1":"Object","dimension2":"Date","dimension3":"Value","subheader":"Realtime download statistics form Github","chartoptions":"","dataoptions":"","filteroptions":null,"value":"Value"},"dataload":[{"id":59,"user_id":"admin","dataset":155,"datasource":6,"name":"New","option":"{}","schedule":null}],"threshold":[{"id":33,"dimension1":"*","dimension2":null,"value":"5000.00","option":">","severity":4}],"favorite":"true"}';
        OCA.Analytics.Navigation.importDataset(null, github);

        let finance = '{"dataset":{"name":"Demo: Finance","type":2,"link":"{}","visualization":"ct","chart":"column","dimension1":"Segment","dimension2":"Year","dimension3":null,"subheader":"Sales and revenue of the last years","chartoptions":"","dataoptions":"[{\\"yAxisID\\":\\"primary\\",\\"type\\":\\"bar\\"},{\\"yAxisID\\":\\"primary\\",\\"type\\":\\"bar\\"},{\\"yAxisID\\":\\"primary\\",\\"type\\":\\"bar\\"},{\\"yAxisID\\":\\"primary\\",\\"type\\":\\"line\\"}]","filteroptions":"{\\"filter\\":{\\"dimension2\\":{\\"option\\":\\"GT\\",\\"value\\":\\"2011\\"}}}","value":"\u20ac"},"dataload":[],"threshold":[],"favorite":"","data":[["Channel Partners","2011","30216.00"],["Channel Partners","2012","18540.00"],["Channel Partners","2013","30216.00"],["Channel Partners","2014","4404.00"],["Channel Partners","2015","10944.00"],["Channel Partners","2016","25932.00"],["Channel Partners","2017","18540.00"],["Channel Partners","2018","34056.00"],["Channel Partners","2019","23436.00"],["Channel Partners","2020","25692.00"],["Enterprise","2011","33318.00"],["Enterprise","2012","43125.00"],["Enterprise","2013","25500.00"],["Enterprise","2014","52625.00"],["Enterprise","2015","43125.00"],["Enterprise","2016","52743.00"],["Enterprise","2017","32370.00"],["Enterprise","2018","26420.00"],["Enterprise","2019","52950.00"],["Enterprise","2020","37980.00"],["Government","2011","15022.00"],["Government","2012","5840.00"],["Government","2013","35200.00"],["Government","2014","6181.00"],["Government","2015","8001.00"],["Government","2016","60350.00"],["Government","2017","36340.00"],["Government","2018","59550.00"],["Government","2019","10451.00"],["Government","2020","32100.00"],["Total Sales","2011","78556.00"],["Total Sales","2012","67505.00"],["Total Sales","2013","90916.00"],["Total Sales","2014","63210.00"],["Total Sales","2015","62070.00"],["Total Sales","2016","139025.00"],["Total Sales","2017","87250.00"],["Total Sales","2018","120026.00"],["Total Sales","2019","86837.00"],["Total Sales","2020","95772.00"]]}';
        OCA.Analytics.Navigation.importDataset(null, finance);
    },

    showPage: function () {
        let nextSlide = OCA.Analytics.Wizzard.sildeArray[OCA.Analytics.Wizzard.currentSlide];
        let newpage = document.importNode(document.getElementById(nextSlide).content, true);
        let prev = document.getElementById('wizzardPrevious');
        let next = document.getElementById('wizzardNext');

        document.getElementById('pageBody').innerHTML = '';
        document.getElementById('pageBody').appendChild(newpage);

        if (OCA.Analytics.Wizzard.currentSlide === OCA.Analytics.Wizzard.sildeArray.length - 1) {
            document.getElementById('wizzardEnd').addEventListener('click', OCA.Analytics.Wizzard.close);
            document.getElementById('wizzardDemo').addEventListener('click', OCA.Analytics.Wizzard.demo);
        }

        OCA.Analytics.Wizzard.currentSlide === 1 ? prev.hidden = true : prev.hidden = false;
        OCA.Analytics.Wizzard.currentSlide === OCA.Analytics.Wizzard.sildeArray.length - 1 ? next.hidden = true : next.hidden = false;
    },

    dismiss: function () {
        $.ajax({
            type: 'POST',
            url: OC.generateUrl('apps/analytics/wizzard'),
        })
    },
}

/**
 * @namespace OCA.Analytics.Wizzard
 */
OCA.Analytics.WhatsNew = {

    whatsnew: function (options) {
        options = options || {}
        $.ajax({
            type: 'GET',
            url: OC.generateUrl('apps/analytics/whatsnew'),
            data: {'format': 'json'},
            success: options.success || function (data, statusText, xhr) {
                OCA.Analytics.WhatsNew.show(data, statusText, xhr);
            },
        });
    },

    dismiss: function (version) {
        $.ajax({
            type: 'POST',
            url: OC.generateUrl('apps/analytics/whatsnew'),
            data: {version: encodeURIComponent(version)}
        })
        $('.whatsNewPopover').remove();
    },

    show: function (data, statusText, xhr) {
        if (xhr.status !== 200) {
            return
        }

        let item, menuItem, text, icon

        const div = document.createElement('div')
        div.classList.add('popovermenu', 'open', 'whatsNewPopover', 'menu-left')

        const list = document.createElement('ul')

        // header
        item = document.createElement('li')
        menuItem = document.createElement('span')
        menuItem.className = 'menuitem'

        text = document.createElement('span')
        text.innerText = t('core', 'New in') + ' ' + data['product']
        text.className = 'caption'
        menuItem.appendChild(text)

        icon = document.createElement('span')
        icon.className = 'icon-close'
        icon.onclick = function () {
            OCA.Analytics.WhatsNew.dismiss(data['version'])
        }
        menuItem.appendChild(icon)

        item.appendChild(menuItem)
        list.appendChild(item)

        // Highlights
        for (const i in data['whatsNew']['regular']) {
            const whatsNewTextItem = data['whatsNew']['regular'][i]
            item = document.createElement('li')

            menuItem = document.createElement('span')
            menuItem.className = 'menuitem'

            icon = document.createElement('span')
            icon.className = 'icon-checkmark'
            menuItem.appendChild(icon)

            text = document.createElement('p')
            text.innerHTML = _.escape(whatsNewTextItem)
            menuItem.appendChild(text)

            item.appendChild(menuItem)
            list.appendChild(item)
        }

        // Changelog URL
        if (!_.isUndefined(data['changelogURL'])) {
            item = document.createElement('li')

            menuItem = document.createElement('a')
            menuItem.href = data['changelogURL']
            menuItem.rel = 'noreferrer noopener'
            menuItem.target = '_blank'

            icon = document.createElement('span')
            icon.className = 'icon-link'
            menuItem.appendChild(icon)

            text = document.createElement('span')
            text.innerText = t('core', 'View changelog')
            menuItem.appendChild(text)

            item.appendChild(menuItem)
            list.appendChild(item)
        }

        div.appendChild(list)
        document.body.appendChild(div)
    }

}
