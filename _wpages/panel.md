---
layout: other
title: Panel Discussion
---

{:.nt-header}
## Panel Discussion

{:.nt-panel-title}
##### Topic: _Making algorithmic decision systems unbiased_

{:.nt-panel-title}
##### Moderator

<div class="row">
{% assign mem="Y. Narahari" %}
<div class="off-3 off-0-medium col-6 col-12-medium">
    <div class="row">
        <div class="col-3">
            <img class="img-fuild" style="max-width: 120px; max-height: auto;" src="{{ site.baseurl }}/images/peoples/{{ site.data.peoples[mem][3] | default: "avtar.png" }}?{{ site.time | date: "%s" }}">
        </div>
        <div class="col-9">
            <div class="nt-feature-pad">
                <h3><a href="{{ site.data.peoples[mem][2] | default: "#" }}" target="_blank">{{ site.data.peoples[mem][0] | default: mem }}</a></h3>
                <p>{{ site.data.peoples[mem][1] | default: ""}}</p>
            </div>
        </div>
    </div>
</div>
<!-- <div class="col-12 offset-sm-3 col-sm-6 offset-md-4 col-md-4 p-4">
    <div class="col-6 offset-3"><img src="{{ site.baseurl }}/images/peoples/{{ site.data.peoples[mem][3] | default: "avtar.png" }}?{{ site.time | date: "%s" }}" class="img-fluid" style="width: 100%;" ></div>
    <h5 class="text-center"><a href="{{ site.data.peoples[mem][2] | default: "#" }}" target="_blank">{{ site.data.peoples[mem][0] | default: mem }}</a></h5>
    <h5 class="text-center">{{ site.data.peoples[mem][1] | default: ""}}</h5>
    <h5 class="text-center">
    </h5>
</div> -->

</div>

##### Panelists
<div class=row>
{% assign committee = "Ricardo Baeza-Yates, Fosca Gionetti, Ashish Goel, Krishna Gummadi, Hima Lakkaraju, Srinivas Narayanan" | split: ", " %}

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
<div class="col-6 col-12-medium">
    <div class="row">
        <div class="col-3">
            <img class="img-fuild" style="max-width: 120px; max-height: auto;" src="{{ site.baseurl }}/images/peoples/{{ site.data.peoples[mem][3] | default: "avtar.png" }}?{{ site.time | date: "%s" }}">
        </div>
        <div class="col-9">
            <div class="nt-feature-pad">
                <h3><a href="{{ site.data.peoples[mem][2] | default: "#" }}" target="_blank">{{ site.data.peoples[mem][0] | default: mem }}</a></h3>
                <p>{{ site.data.peoples[mem][1] | default: ""}}</p>
            </div>
        </div>
    </div>
</div>
<!-- <div class="col-12 offset-sm-{{ sm-offset }} col-sm-6 offset-md-{{ md-offset }} col-md-4 p-4">
    <div class="col-6 offset-3"><img src="{{ site.baseurl }}/images/peoples/{{ site.data.peoples[mem][3] | default: "avtar.png" }}?{{ site.time | date: "%s" }}" class="img-fluid" style="width: 100%;" ></div>
    <h5 class="text-center"><a href="{{ site.data.peoples[mem][2] | default: "#" }}" target="_blank">{{ site.data.peoples[mem][0] | default: mem }}</a></h5>
    <h5 class="text-center">{{ site.data.peoples[mem][1] | default: ""}}</h5>
</div> -->
{% endfor %}
</div>
