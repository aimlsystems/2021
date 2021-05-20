---
layout: page
title: Panel Discussion
menutype: main-conf
plink: panel
menu_order: 20
---

#### Panel
##### Topic: _Making algorithmic decision systems unbiased_

##### Moderator

<div class="row">
{% assign mem="Y. Narahari" %}
<div class="col-12 offset-sm-3 col-sm-6 offset-md-4 col-md-4 p-4">
    <div class="col-6 offset-3"><img src="{{ site.baseurl }}/images/peoples/{{ site.data.peoples[mem][3] | default: "avtar.png" }}?{{ site.time | date: "%s" }}" class="img-fluid" style="width: 100%;" ></div>
    <h5 class="text-center"><a href="{{ site.data.peoples[mem][2] | default: "#" }}" target="_blank">{{ site.data.peoples[mem][0] | default: mem }}</a></h5>
    <h5 class="text-center">{{ site.data.peoples[mem][1] | default: ""}}</h5>
    <h5 class="text-center">
{% if detail[0] %}
<!-- Title: <b>{{ detail[0] }}</b> -->
{% endif %}
    </h5>
</div>

</div>

##### Panelist
<div class=row>
{% assign committee = "Fosca Gionetti, Ashish Goel, Krishna Gummadi, Hima Lakkaraju" | split: ", " %}

{% assign sm-modulo = committee.size | modulo: 2 %}
{% assign md-modulo = committee.size | modulo: 3 %}
{% for mem in committee %}
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
</div>
{% endfor %}
</div>

<!-- #### Panel Chairs

{% include function_chairs.html committee="Panel" %} -->
