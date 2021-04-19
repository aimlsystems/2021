---
layout: page
title: Keynote Speakers
menutype: main-conf
menu_order: 1
---

### {{ page.title }}


<!-- {% for speaker in site.data.keynote_speakers %}

{% assign name = speaker[0] %}
{% assign detail = speaker[1] %}

{% assign people = site.data.peoples[name] %}

#### {{ people[0] }}

[![{{ people[0] }}]({{ site.baseurl }}/images/peoples/{{ people[3] }}){:.img-blore}]({{ people[2] }}){:target="_blank"}

{{ people[1] }}

{% if detail[0] %}
Title: **{{ detail[0] }}**
{% endif %}


{% endfor %} -->

{% assign speakers = site.data.keynote_speakers %}

<div class="row oc_cntr">
{% assign sm-modulo = speakers.size | modulo: 2 %}
{% assign md-modulo = speakers.size | modulo: 3 %}
{% for speaker in speakers %}
{% assign mem = speaker[0] %}
{% assign detail = speaker[1] %}

{% assign sm-offset = "0" %}
{% if forloop.last and sm-modulo==1 %}
{% assign sm-offset = "3" %}
{% endif %}

{% assign md-offset = "0" %}
{% if forloop.last and md-modulo==1 %}
{% assign md-offset = "4" %}
{% elsif forloop.rindex==2 and md-modulo==2 %}
{% assign md-offset = "2" %}
{% endif %}

<div class="col-12 offset-sm-{{ sm-offset }} col-sm-6 offset-md-{{ md-offset }} col-md-4 p-4">
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
