---
layout: other
title: Schedule
---

<style>
/* Style the tab */
.tab {
  overflow: hidden;
  /*border: 1px solid #ccc;
  background-color: #f1f1f1;*/
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px 16px;
  transition: 0.3s;
  background-color: #f1f1f1
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  /*border: 1px solid #ccc;*/
  /*border-top: none;*/
}

.tabcontent {
  animation: fadeEffect 1s; /* Fading effect takes 1 second */
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}


.conf-schedule td {
  border: solid 1px black;
  text-align: center;
}

.conf-schedule tr:nth-child(odd), .sc-bgcolor-odd {
  background-color: #D9E2F3;
}
.conf-schedule tr:nth-child(even), .sc-bgcolor-even {
  background-color: #6AA84F;
}

.text-em {
  font-style: italic;
}

.sc-bgcolor-1 {
  background-color: #B4C6E7;
}

.sc-color-1, .sc-color-1 h1 {
  color: #8D54A5;
}

.sc-color-2, .sc-color-2 h1 {
  color: #002060;
}

.sc-color-3, .sc-color-3 h1 {
  color: #333399;
}

.sc-header {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.conf-schedule h1{
  padding-top: .5em;
  padding-bottom: .5em;
}
.conf-schedule td {
  min-height: 2em;
  padding-top: .5em;
  padding-bottom: .5em;
}

.text-underline {
  text-decoration: underline;
}
</style>

<script>
  function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>

<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openCity(event, '20211021')" id="defaultOpen">21-Oct-2021</button>
  <button class="tablinks" onclick="openCity(event, '20211022')">22-Oct-2021</button>
  <button class="tablinks" onclick="openCity(event, '20211023')">23-Oct-2021</button>
  <button class="tablinks" onclick="openCity(event, '20211024')">24-Oct-2021</button>
</div>

<!-- Tab content -->
<div id="20211021" class="tabcontent">
  <h1 class="text-center sc-header sc-color-3 text-underline">Thursday, 21 October 2021</h1>
  <h1 class="text-center sc-header sc-color-3">All Timings are in IST</h1>

  <table class="conf-schedule">
    <tbody>
      <tr>
        <td class="text-em sc-color-1 sc-bgcolor-1">
          <h1>
            AIMLSystems 2021 Inauguration and Opening Remarks
            <br />
            (9:30 AM &ndash; 10:00 AM)
            <br />
            General Co-Chairs
            <br />
            TPC Co-Chairs
            <br />
            Steering Committee Co-Chairs
          </h1>
          <h1>
            <span style="text-decoration: underline;">
              Keynote Talk # 1
            </span>
            <br />
            Geoff Webb
            <br />
            Monash University, Australia
            <br />10:00 AM &ndash; 11:00 AM
          </h1>
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>
          <h1>Paper Sessions (11:30 AM &ndash; 1:00 PM)</h1>
          <h1>Session T1-1: 4 full papers + 2 poster/short/demo </h1>
        </td>
      </tr>
      <tr>
        <td>
          <h1>Lunch Break (1:00 PM &ndash; 2:00 PM)</h1>
        </td>
      </tr>
      <tr>
        <td>
          <h1>Paper Sessions (2:00 PM &ndash; 4:30 PM)<br />Session T1-2: 8 full papers</h1>
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="sc-bgcolor-1">
          <h1>
            <span class="sc-color-2">
              Panel Discussion I (5:00 PM &ndash; 6:30 PM)
              <br />
              Title: Making Algorithmic Decision Systems Unbiased
            </span>
            <br />
            Moderator: Prof. Y. Narahari, IISc Bangalore, India
            <br />
            Panelists: Fosca Gionetti (Pisa), Ashish Goel (Stanford), Krishna Gummadi (Max Planck), Himabindu Lakkaraju (Harvard), Fernando Pareira (Google)
          </h1>
        </td>
      </tr>
      <tr>
        <td class="sc-bgcolor-odd">
          <h1>
            <span class="sc-color-3">
              Industry Insights Keynote # 1
              <br />
              Anand Deshpande, Persistent Systems, India
              <br />
              6:30 PM &ndash; 7:15 PM
            </span>
          </h1>
          <h1>
            <span class="sc-color-3">
              Keynote Talk # 2
              <br />
              Juliana Freire
              <br />
              NYU Tandon School of Engineering, USA
              <br />
              7:15 PM &ndash; 8:15 PM
            </span>
          </h1>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div id="20211022" class="tabcontent">
  <h1 class="text-center sc-header sc-color-3 text-underline">Friday, 22 October 2021</h1>
  <h1 class="text-center sc-header sc-color-3">All Timings are in IST</h1>

  <table class="conf-schedule">
    <tbody>
      <tr>
        <td class="text-em sc-color-1 sc-bgcolor-1">
          <h1>AIMLSystems Keynote Talk # 3<br />Gerhard Weikum<br />Max Planck Institute for Informatics, Germany</h1>
          <h1>(10 AM &ndash; 11 AM)</h1>
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>
          <h1>Paper Session (11:30 AM &ndash; 1:00 PM)</h1>
          <h1>Session T1-3: 2 invited papers + 3 full papers</h1>
        </td>
      </tr>
      <tr>
        <td>
          <h1>Lunch Break (1:00 PM &ndash; 2:00 PM)</h1>
        </td>
      </tr>
      <tr>
        <td>
          <h1>Paper Session (2:00 PM &ndash; 4:30 PM)</h1>
          <h1>Session T1-4: 3 full papers + doctoral symposium</h1>
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="sc-bgcolor-1">
          <h1 class="sc-color-3">Panel Discussion II (5:00 PM &ndash; 6:30 PM)</h1>
          <h1>Topic: Machine intelligence and the next pandemic: Are we ready?</h1>
          <h1 class="sc-color-3">Moderator: Vijay Chandru</h1>
          <h1 class="sc-color-3">Panelists: Aditya Prakash (GaTech), Venkatesh Mysore (NVIDIA), Bhubaneswar (Bud) Mishra (NYU Tandon School of Engg.), Geetha Manjunath (Niramai), Vamsi Veeramachaneni (Strand Life Sciences)</h1>
        </td>
      </tr>
      <tr>
        <td class="sc-bgcolor-odd sc-color-3">
          <h1><span style="text-decoration: underline;">Industry Insights Keynote # 2</span><br />6:30 PM &ndash; 7:15 PM<br />Daniel Keller, Visible, Germany</h1>
          <h1><span style="text-decoration: underline;">Keynote Talk # 4</span><br />7:15 PM &ndash; 8:15 PM<br />Sergei Kuznetsov<br />HSE University, Moscow, Russia</h1>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div id="20211023" class="tabcontent">
  <h1 class="text-center sc-header sc-color-3 text-underline">Saturday, 23 October 2021</h1>
  <h1 class="text-center sc-header sc-color-3">All Timings are in IST</h1>

  <table class="conf-schedule">
    <tbody>
      <tr>
        <td class="text-em sc-color-1 sc-bgcolor-1">
          <h1>AIMLSystems Keynote Talk # 5<br />Johannes Gehrke<br />Microsoft Research in Redmond, USA<br />(10 AM &ndash; 11 AM)</h1>
          <h1>Industry Insights Keynote # 3<br />Ananth Krishnan, Tata Consultancy Services, India<br />11:00 AM &ndash; 11:45 AM</h1>
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>
          <h1>Paper Session (11:45 AM &ndash; 1:00 PM)<br />T1-5 : 2 full papers + 2 invited papers</h1>
        </td>
      </tr>
      <tr>
        <td>
          <h1>Lunch Break (1:00 PM &ndash; 2:00 PM)</h1>
        </td>
      </tr>
      <tr>
        <td>
          <h1>Industry Track</h1>
          <h1>2:00 PM &ndash; 5:00 PM</h1>
        </td>
      </tr>
      <tr>
        <td class="sc-bgcolor-1">
          <h1 class="sc-color-3">Panel Discussion III (5:00 PM &ndash; 6:15 PM)</h1>
          <h1>Topic: AI in 2030: The Age of Autonomous Systems</h1>
          <h1 class="sc-color-3">Moderator: Vijay Gabale, Infilect Technologies, India</h1>
          <h1 class="sc-color-3">Panelists: Debdoot Mukherjee (ShareChat), Saad Nasser (Ati Motors), Ganesh Mani (CMU), Dhivakar Kanagaraj (TartanSense)</h1>
        </td>
      </tr>
      <tr>
        <td class="sc-bgcolor-odd sc-color-3">
          <h1><span style="text-decoration: underline;">Industry Insights Keynote # 4</span><br />Rajeev Rastogi, Amazon, India<br />6:15 PM &ndash; 7:00 PM</h1>
          <h1><span style="text-decoration: underline;">Keynote Talk # 6</span><br />Sang Cha<br />Seoul National University, Korea<br />7:00 PM &ndash; 8:00 PM</h1>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div id="20211024" class="tabcontent">
  <h1 class="text-center sc-header sc-color-3 text-underline">Sunday, 24 October 2021</h1>
  <h1 class="text-center sc-header sc-color-3">All Timings are in IST</h1>

  <table class="conf-schedule">
    <tbody>
      <tr>
        <td>
          <h1>ALMLSystems&rsquo;21 TUTORIALS</h1>
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>
          <h1>Tutorial # 1: 10:00 AM &ndash; 1:00 PM</h1>
        </td>
      </tr>
      <tr>
        <td>
          <h1>Break</h1>
        </td>
      </tr>
      <tr>
        <td>
          <h1>Tutorial # 2: 5:00 PM &ndash; 8:00 PM</h1>
        </td>
      </tr>
      <tr>
        <td class="sc-color-2">
          <h1>Conference Closure</h1>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<script>
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>
