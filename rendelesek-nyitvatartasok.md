---
layout: page
permalink: /rendelesek-nyitvatartasok/
title:  Rendelések, nyitvatartások
comments: true
icon: fas fa-key
thumbnail: https://static.karancssag.info/images/og/pexels-photo-1537268.jpg
postthumbnail: https://static.karancssag.info/images/og/w800/pexels-photo-1537268.jpg
---
#### **Háziorvosi rendelés - Dr. Angyal István** - Karancsság, Kossuth út 64.
##### [+36 32-400-005](tel:+3632400005) 

{:.table.table-borderless}

| |Karancsság|Ságújfalu|Szalmatercs|
|---:|:---:|:---:|:---:|
| Hétfő | 9:00 - 12:00 | 13:00 - 16:00 ||
| Kedd | | | 9:00 - 13:00 ||
| Szerda | 9:00 - 13:00 |||
| Csütörtök | | 10:00 - 13:00 ||
| Péntek | 9:00 - 13:00 |

---
#### **Fogászati szakrendelés - Dr. Brumár Mihály** - Karancsság, Kossuth út 56.
##### [+36 32-400-165](tel:+3632400165) 

{:.table.table-borderless}

| |Idő|
|---:|:---:|
| Hétfő | 13:00 - 19:00 |
| Kedd | 8:00 - 15:00 |
| Szerda | 13:00 - 19:00 |
| Csütörtök | 8:00 - 13:00 (iskolafogászat) |
| Péntek | 8:00 - 14:00 |

---
#### **Ezüst Gyógyszertár** - Karancsság, Kossuth út 62.
##### [+36 32-400-002](tel:+3632400002) 

{:.table.table-borderless}

| |Idő|
|---:|:---:|
| Hétfő | 7:15 - 11:45 |
| Kedd | 7:15 - 13:00 |
| Szerda | 7:15 - 16:00 |
| Csütörtök | 12:00 - 13:30 |
| Péntek | 7:15 - 13:00 |


<div class="container">
{% for place in site.data.places %}
    <div class="border-top">
        <div class="row">
            <div class="col-md-12 mb-2 mt-2">
                <h5 class="mb-1" id="{{ place.place_id }}">{{ place.name }}</h5>
                <p class="mb-1">            {{ place.adr_address}}
                    {% if place.international_phone_number %}
                    <br/><a href="tel:{{ place.international_phone_number }}">Tel: {{ place.international_phone_number }}</a>
                    {% endif %}
                </p>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-md-6">
            {% if place.website %}
                <small class="text-muted"><a href="{{ place.website }}" target="_blank">{{ place.website }}</a></small>
            {% endif %}
            {% if place.opening_hours %}
                <h6 class="mb-1">Nyitvatartás:</h6>
                <ul class="list-unstyled">
                    {% for day in place.opening_hours.weekday_text %}
                        <li>{{ day }}</li>
                    {% endfor %}
                </ul>
            {% endif %}
            </div>
            <div class="col-md-6">
                <a href="{{ place.url }}" target="_blank">
                    <img class="mx-auto d-block" src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+DD1111({{ place.geometry.location.lng }},{{ place.geometry.location.lat }})/{{ place.geometry.location.lng }},{{ place.geometry.location.lat }},16/300x180?access_token=pk.eyJ1IjoidGhnYWIiLCJhIjoiY2wwOWxnbmhxMGJ3ZjNqcnFtbWo3eDY1ZyJ9.e_mWDhGwNgvwDjw4XDf_nQ" />
                </a>
            </div>
        </div>
    </div>
{% endfor %}
</div>