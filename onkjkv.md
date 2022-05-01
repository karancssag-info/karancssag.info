---
layout: page
title: Az önkormányzat honlapján elérhető jegyzőkönyvek listája
description: A jegyzőkönyvek elérhetősége, csatolmányok feltöltési listája
permalink: /download/forras
comments: false
thumbnail: https://static.karancssag.info/images/og/pexels-sora-shimazaki-5668859.jpg
postthumbnail: https://static.karancssag.info/images/og/w800/pexels-sora-shimazaki-5668859.jpg
icon: fas fa-briefcase
author: thgab
---

### Az önkormányzat honlapján elérhető jegyzőkönyvek listája

<ul>
{% assign onkroot = "https://karancssag.asp.lgov.hu"] %}
{% for article in site.data.aspjkv %}
    <li>
        <a href="{{ onkroot }}{{ article.link }}" target="_blank" >{{ article.article.header }}</a><br/>
        <small>
            {{ article.article.text }}
        </small>
        <ol>
        {% for item in article.article.items %}
            <li>
                <a href="{{ item.href }}" target="_blank">{{ item.text }}</a><br/>
                <small>Feltöltve:
                    <b>{{ item.Last-Modified.local }}</b>
                </small>
            </li>
    {% endfor %}
    </ol>
    </li>
{% endfor %}
</ul>

_Az indexkép [Sora Shimazaki](https://www.pexels.com/hu-hu/@sora-shimazaki?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels) fotója a [Pexels](https://www.pexels.com/hu-hu/foto/uzletember-ferfi-no-hordozhato-szamitogep-5668859/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels) oldaláról._