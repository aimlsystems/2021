---
layout: other
title: Technical Program
---

{% for ses in site.data.technicalProgram %}

{% if forloop.index0 > 0 %}
<br>
{% endif %}

<a id="{{ ses[0] }}">

# {{ ses[1]["time"] }}

## {{ ses[0] }}: {{ ses[1]["session"] }}

{% if ses[1]["chair"] %}
{% assign chair = ses[1]['chair'] %}
#### Session Chair: {{ site.data.peoples[chair][0] }}, {{ site.data.peoples[chair][1] }}
{% endif %}

<div markdown=1 class="bd-callout bd-callout-info">
<ul>
{% for paper in ses[1]["papers"] %}

<li><i>{{ paper }}</i></li>

{% endfor %}
</ul>

</div>


{% endfor %}
