---
layout: page
title: Banquet Speakers
menu_order: 3
---

### {{ page.title }}

<!-- {% assign people = site.data.peoples['Rajeev Rastogi'] %}

#### {{ people[0] }}

[![{{ people[0] }}]({{ site.baseurl }}/images/peoples/{{ people[3] }}){:.img-blore}]({{ people[2] }}){:target="_blank"}

{{ people[1] }} -->


{% assign speakers = site.data.banquet_speakers %}

<div class="row oc_cntr">
{% assign sm-modulo = speakers.size | modulo: 2 %}
{% assign md-modulo = speakers.size | modulo: 3 %}
{% for speaker in speakers %}
{% assign mem = speaker[0] %}
{% assign detail = speaker[1] %}
<div class="col-12 {% if forloop.last and sm-modulo==1 %}offset-sm-3{% endif %} {% if forloop.last and md-modulo==1 %}offset-md-4{% elsif forloop.rindex==2 and md-modulo==2 %}offset-md-2{% else %}offset-md-0{% endif %} col-sm-6 col-md-4 p-4">
    <div class="col-6 offset-3"><img src="{{ site.baseurl }}/images/peoples/{{ site.data.peoples[mem][3] | default: "avtar.png" }}?{{ site.time | date: "%s" }}" class="img-fluid" style="width: 100%;" ></div>
    <h5 class="text-center"><a href="{{ site.data.peoples[mem][2] | default: "#" }}" target="_blank">{{ site.data.peoples[mem][0] | default: mem }}</a></h5>
    <h5 class="text-center">{{ site.data.peoples[mem][1] | default: ""}}</h5>
    <h5 class="text-center">
{% if detail[0] %}
Title: <b>{{ detail[0] }}</b>
{% endif %}
    </h5>
</div>
{% endfor %}
</div>