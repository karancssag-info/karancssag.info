---
layout: page
title: Forráslista
description: Az önkormányzat honlapján elérhető jegyzőkönyvek, csatolmányok feltöltési listája
comments: false
thumbnail: https://static.karancssag.info/images/og/pexels-little-visuals-1964.jpg
postthumbnail: https://static.karancssag.info/images/og/w800/pexels-little-visuals-1964.jpg
author: thgab
---

### Az önkormányzat honlapján elérhető jegyzőkönyvek listája
Az karancssag.info oldalon a jegyzőkönyvek mellékletekkel összevonva, kereshető (szöveges réteget tartalmazó) formában olvashatóak. 
Ez a lista tartalmazza az önkormányzat ASP oldalára feltöltött jegyzőkönyvek és mellékletek feltöltési idejét, és zárójelben, hogy a képviselő testületi ülés időpontja utáni hányadik napon kerültek feltöltésre.

<ol reversed>
{% assign onkroot = "https://karancssag.asp.lgov.hu" %}
{% for article in site.data.aspjkv %}
    <li>
        <a href="{{ onkroot }}{{ article.link }}" target="_blank" >{{ article.article.header }}</a><br/>
        <small>
            {{ article.article.text }}
        </small>
        <ul>
        {% for item in article.article.items %}
            <li>
                <a href="{{ item.href }}" target="_blank">{{ item.text }}</a><br/>
                <small>Feltöltve:
                    <b>{{ item.Last-Modified.local }}{% if item.Last-Modified.delay != 0 %}<br/> ({{ item.Last-Modified.delay | divided_by: 86400 }} nappal később){% endif %}</b>
                </small>
            </li>
        {% endfor %}
        </ul>
    </li>
{% endfor %}
</ol>

_Az indexkép [Little Visuals](https://www.pexels.com/hu-hu/@little-visuals?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels) fotója a [Pexels](https://www.pexels.com/hu-hu/foto/erdo-folyam-forras-termeszet-1964/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels) oldaláról._