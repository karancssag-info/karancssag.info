---
layout: page
title: Helyi önkormányzati választások
description: Tájékoztató oldal a 2024-es, helyi önkormányzati választásokról, Karancsság község vonatkozásában
comments: false
thumbnail: https://static.karancssag.info/images/og/pexels-element5-1550337.jpg
postthumbnail: https://static.karancssag.info/images/og/w800/pexels-element5-1550337.jpg
icon: fas fa-question
author: thgab
---

# Helyi önkormányzati választások
#### Az adatok a [vtr.valasztas.hu](https://vtr.valasztas.hu/onk2024){:target="_blank"} oldalról automatikusan frissülnek
{: .mb-3}

<div class="container">
<h2 class="mb-3" >Jelöltek</h2>
{% for jeloltek in site.data.vtr.jeloltek %}
    <h3 class="mb-2 mt-3">{{ jeloltek.name }}</h3>
    <div class="list-group list-group-flush mb-2">
        {% for jelolt in jeloltek.result %}
            <div class="list-group-item">
                <div class=" d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ jelolt.neve }}</h5>
                  <small class="text-muted">Státusz változás: <b>{{ jelolt.allapot_valt| date: "%Y-%m-%d" }}</b></small>
                </div>
                <p class="mb-1">
                    {{ jelolt.jlcs_nev }}
                </p>
                <small class="text-muted">Státusz: <b>{{ jelolt.allapot_parsed }}</b></small>
            </div>
        {% endfor %}
    </div>
{% endfor %}
</div>
{% assign letszam = site.data.vtr.adatok.letszam  %}

<h2 class="mb-3" >Választásra jogosultak száma a településen</h2>
<div class="container">
    <div class="rounded border border-light row">
        <div class="bg-light p-3 d-grid align-items-center col-md-4 col-sm-12">
            <div>
                <div class="mb-1">Választásra jogosultak <strong>aktuális</strong> száma</div>
                <strong>{{ letszam.onkVpSzumma }}</strong>
            </div>
        </div>
        <div class="p-3 d-grid align-items-center col">
            <div>
                <div class="border-bottom border-light">
                    <dl class="mb-1 row">
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Lakóhelyük szerint szavazók száma</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">{{ letszam.onkLakcSzavkorSzavaz }}</dd>
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Tartózkodási helyükre átjelentkezettek száma</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">{{ letszam.onkAtjelBelf }}</dd>
                    </dl>
                </div>
                <div class="">
                    <dl class="pt-2 mb-0 row">
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Magyar állampolgárok magyarországi lakcímmel</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">{{ letszam.onkMagyarAllampolgMagyarCim }}</dd>
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Más EU tagállamok állampolgárai</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">{{ letszam.onkMasEuAllampolg }}</dd>
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Huzamos tartózkodási jogosultsággal rendelkező, menekült</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">{{ letszam.onkBevLetMen }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="rounded border border-light row">
        <div class="bg-light p-3 d-grid align-items-center col-md-4 col-sm-12">
            <div>
                <div class="mb-1">Választásra jogosultak száma a <strong>szavazóköri névjegyzék előállításakor (2024. március 13.)</strong></div>
                <strong>{{ letszam.onkInduloVpSzumma }}</strong>
            </div>
        </div>
        <div class="p-3 d-grid align-items-center col">
            <div>
                <div class="border-bottom border-light">
                    <dl class="mb-1 row">
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Lakóhelyük szerint szavazók száma</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">{{ letszam.onkInduloVpSzumma }}</dd>
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Tartózkodási helyükre átjelentkezettek száma</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">0</dd>
                    </dl>
                </div>
                <div class="">
                    <dl class="pt-2 mb-0 row">
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Magyar állampolgárok magyarországi lakcímmel</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">{{ letszam.onkInduloMagyarAllampolgMagyarCim }}</dd>
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Más EU tagállamok állampolgárai</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">{{ letszam.onkInduloMasEuAllampolg }}</dd>
                        <dt class="fw-normal mt-1 mb-sm-1 col-sm-8 col-12">Huzamos tartózkodási jogosultsággal rendelkező, menekült</dt>
                        <dd class="text-end fw-semibold mb-1 mt-sm-1 col-sm-4 col-12">{{ letszam.onkInduloBevLetMen }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</div>
_Az
indexkép [Element 5](https://www.pexels.com/hu-hu/@element5/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels)
fotója
a [Pexels](https://www.pexels.com/hu-hu/foto/1550337/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels)
oldaláról._