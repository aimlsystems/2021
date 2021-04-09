---
layout: page
title: Keynote Speakers
menutype: main-conf
menu_order: 1
---

### {{ page.title }}


{% for speaker in site.data.keynote_speakers %}

{% assign name = speaker[0] %}
{% assign detail = speaker[1] %}

{% assign people = site.data.peoples[name] %}

#### {{ people[0] }}

[![{{ people[0] }}]({{ site.baseurl }}/images/peoples/{{ people[3] }}){:.img-blore}]({{ people[2] }}){:target="_blank"}

{{ people[1] }}

{% if detail[0] %}
Title: **{{ detail[0] }}**
{% endif %}


{% endfor %}
