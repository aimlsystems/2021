---
layout: home
title: Home
---

&nbsp;

{:.text-justify.pe-4}
AIMLSystems is a brand new conference targeting research in the intersection of AI/ML
techniques and systems engineering. Through this conference we plan to bring out and highlight
the natural connections with these two fields. Specifically we explore how immense strides in
AI/ML techniques are made possible through computational systems research (e.g.,
improvements in CPU/GPU architectures, data-intensive infrastructure, communications etc.), 
how the use of AI/ML can help in the continuous and workload-driven design space exploration
of computational systems (e.g., self-tuning databases, learning compiler optimizers, learnable
network systems etc.) and, the use of AI/ML in the design of socio-economic systems such as
public healthcare, and security.


<div class="alert alert-primary me-4">
<a href="{% include function_plink.html plink="cfp" %}"><b>Call For Papers Announced!</b></a>
</div>

##### Keynote Speakers

{% assign rkeynotes = site.data.keynote_speakers["Research"] %}
{%- assign ikeynotes = site.data.keynote_speakers["Industrial Insights"] -%}
{%- assign keys = "" -%}
{%- for ik in rkeynotes -%}
{%- assign p = ik[0] | split: " " | reverse | join: " " -%}
{%- if forloop.first == true -%}
{%- assign keys = keys | append: p -%}
{%- else -%}
{%- assign keys = keys | append: ", " | append: p -%}
{%- endif -%}
{%- endfor -%}
{%- for ik in ikeynotes -%}
{%- assign p = ik[0] | split: " " | reverse | join: " " -%}
{%- assign keys = keys | append: ", " | append: p -%}
{%- endfor -%}
{%- assign keys = keys | split: ", " -%}
{%- assign keys = keys | sort -%}

<div class="row divrow" id="keynote_scroll">
{% for ik in keys %}
{% assign mod = forloop.index0 | modulo: 3 %}
{% if mod == 0 %}
<div class="col-12"><div class="row">
{% endif %}
{% assign mem = ik | split: " " | reverse | join: " " %}
<div class="col-sm-4">
<div class="col-6 offset-3"><img src="{{ site.baseurl }}/images/peoples/{{ site.data.peoples[mem][3] | default: "avtar.png" }}?{{ site.time | date: "%s" }}" class="img-fluid" style="width: 100%;" ></div>
    <h5 class="text-center"><a href="{{ site.data.peoples[mem][2] | default: "#" }}" target="_blank">{{ site.data.peoples[mem][0] | default: mem }}</a></h5>
    <h5 class="text-center">{{ site.data.peoples[mem][1] | default: ""}}</h5>
</div>
{% assign mod = forloop.index | modulo: 3 %}
{% if mod == 0 %}
</div></div>
{% endif %}
{% endfor %}
{% assign mod = keys.size | modulo: 3 %}
{% if mod != 0 %}
</div></div>
{% endif %}

</div>
    
<!-- <div id="carouselKeynoteIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-pause=false>
    <div class="carousel-indicators">
        {% for img in site.data.home_slide %}
        <button type="button" data-bs-target="#carouselKeynoteIndicators" data-bs-slide-to="{{ forloop.index0 }}"{% if forloop.first == true %} class="active" aria-current="true"{% endif %} aria-label="Slide {{ forloop.index }}"></button>
        {% endfor %}
    </div>
    <div class="carousel-inner">
        {% for img in site.data.home_slide %}
        <div class="carousel-item{% if forloop.first == true %} active{% endif %}" data-bs-interval="3000" >
            <div class="row">
                <div class="blurred-bg"></div>
                <div class="col nonblurred-bg text-center">
                    <img src="{{ site.baseurl }}/images/home_banner/{{ img }}" class="img-fluid">
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselKeynoteIndicators"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselKeynoteIndicators"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div> -->


##### Why Another AI/ML Conference? 

Through this annual conference, we are aiming to cover the whitespace at the intersection of data-intensive AI/ML techniques and systems engineering. We also aspire to become the leading forum for sharing practical experiences from building and deploying AI/ML systems in the socio-economic spheres such as public healthcare and security. 

Although being held in India, the conference aims to attract international participation and emphasize gender and geographic diversity.

This conference series is an initiative of the [COMSNETS Association](http://www.comsnets-association.org/), a not-for-profit organization, which has organized the prestigious [COMSNETS](https://comsnets.org) networking conference each year since 2009. 

The AIMLSystems conference is in the process of obtaining technical co-sponsorship from IEEE and In-cooperation status from
ACM. The conference plans to partner with several academic institutions and research labs.

##### Location of the Conference

The AIMLSystems'21 conference will be held in Bangalore, the Silicon Valley of Asia. 

Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. Bangalore boasts of some of the finest institutions in the world such as the [Indian Institute of Science](https://iisc.ac.in/), the [Raman
Research Institute](http://www.rri.res.in/), the [Indian Institute of Astrophysics](https://www.iiap.res.in/), the [Indian Institute of Management](https://www.iimb.ac.in/), to name a few. 

Almost every multinational corporation including Amazon, Google, IBM, Microsoft, etc has a research lab in Bangalore. Apart from MNCs, Bangalore is also home to many startups and Indian tech companies. such as Infosys and Wipro.

Besides being a global technology hub, Bangalore is rightfully called the garden city and is also close to many national parks and interesting tourist sites.

##### Timing of the Conference

The conference is sandwiched between the two major Indian festivals, [Dussehera](https://en.wikipedia.org/wiki/Vijayadashami) and [Diwali](https://en.wikipedia.org/wiki/Diwali). In particular, the Mysore Dussehra in the nearby city of Mysore is arguably one of the most prominent cultural events of India. 




<!-- #### Topics of Interest

The areas of interest are broadly categorized into the following three streams:

1. **Systems for AI/ML,** including but not limited to:  
  * CPU/GPU architectures for AI/ML
  * Embedded hardware for AI/ML workloads
  * Data intensive systems for efficient and distributed training
  * Challenges in production deployment of ML systems
  * Efficient model training, optimization and inference
  * Hardware efficient ML methods
  * Resource-constrained ML

1. **AI/ML for Systems,** including but not limited to: 
  * AI/ML for VLSI and architecture design
  * AI/ML in compiler optimization 
  * AI/ML in data management - including database optimizations, virtualization, etc.
  * AI/ML for networks - design of networks, load modeling, etc.
  * AI/ML for power management - green computing, power models, etc.

1. **Applications of AI/ML in Socio-Economic Systems Design,** which includes, but not limited to: 
  * Computational design and analysis of socio-economic systems
  * Fair and bias-free systems for social welfare, business platforms
  * Applications of AI/ML in the design, short-/long-term analysis of cyber-physical systems
  * Mechanism design for socio-economic systems
  * Applications of AI/ML in financial systems
 -->

#### Important Dates
##### Research Track
* Abstract submissions due: June 13, 2021
* Paper submissions due: June 20, 2021
* Author notifications: September 12, 2021
* Conference dates: October 21-23, 2021


---------------------------

<div markdown=1 class=row>
<div markdown=1 class=col>
#### Call for Papers

The goal of the conference is to create a world-class forum for discussing cutting edge research, and directions for new innovative business and technology.

[Submit a Paper &raquo;]({% include function_plink.html plink="cfp" %}){:.btn.btn-primary.btn-sm}

</div>
<div markdown=1 class=col>
#### Conference Highlights

* Keynote & Banquet Talks
* Paper & Poster Sessions
* Invited Talks
* Graduate Forum
* Panel Discussions
* Demos & Exhibits

</div>
<div markdown=1 class=col>
#### Conference Venue

We are proud to announce that {{ site.shortname }} will be held at the Chancery Pavilion Hotel, Bangalore, India.

[How to get here &raquo;]({% include function_plink.html plink="visit_blr" bookmark="get_to_venue" %}){:.btn.btn-primary.btn-sm}
</div>
</div>

