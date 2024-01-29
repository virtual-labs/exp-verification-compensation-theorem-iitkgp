### Theory
<p>In a linear time invariant network when the resistance `(R)` of an uncoupled branch, carrying current (I), is changed by &Delta;R<sub>L</sub> , the currents in all the branches would change and can be obtained by assuming that an ideal voltage source of V<sub>c</sub>  has been connected such that V<sub>c</sub>=I&Delta;R<sub>L</sub> in series with R+&Delta;R<sub>L</sub> when all other sources in the network are replaced by their internal resistances. </p>
<br><h2><span style="background-color: rgb(255, 255, 0);">Explanation :&nbsp;&nbsp;</span></h2>
<p>Let us assume a load `R_L` connected to a dc source network whose thevenin's equivalent gives V<sub>o</sub> as the Thevenin's voltage and R<sub>Th</sub> as Thevenin resistance.</p> 
<br><figure style="text-align:center">
<img alt="" src="images/compensation_theory_web.jpg" style="width:500px;height:210px;">
<br><figcaption>[ Fig. 1. Thevenin Equivalent Circuit ]</figcaption>
</figure>
<br>
<br><figure style="text-align:center">
<img alt="" src="images/compensation_theory2_web.jpg" style="width:380px;height:210px;">
<br><figcaption>[ Fig.2 (a) . Explanation of Compensation theorem ]</figcaption>
</figure>
<br>
<br><figure style="text-align:center">
<img alt="" src="images/compensation_theory3_web.jpg" style="width:380px;height:210px;">
<figcaption>[  Fig.2 (b) . Explanation of Compensation theorem ]</figcaption>
</figure>
<br>
<p>Let the load resistance R<sub>l</sub> be changed to R+&Delta;R<sub>L</sub>.Since the rest of the circuit remains unchanged,the Thevenin equivalent network remains the same.This Change of current being termed as &Delta;I , we find</p><br>								
										
$$\Delta I = I' - I$$
<p style="text-align: center;">&nbsp;&nbsp;&nbsp;&nbsp; 
$$= \frac{V_o}{(R_{Th} + R_L + \Delta R_L} - \frac{V_o}{(R_{Th} + R_L)}$$</p><br>
<p style="text-align: center;">&nbsp;&nbsp;&nbsp;&nbsp;
$$= \frac{V_o (-\Delta R_L)}{(R_{Th} + R_L)(R_{Th} + R_L + \Delta R_L)}$$</p><br>
<p style="text-align: center;">&nbsp;&nbsp;&nbsp;&nbsp; 
$$= -\frac{V_c}{R_{Th} + R_L + \Delta R_L} .......(3)$$</p><br>

$$V_c = I \Delta R_L$$
									
<p>This voltage V<sub>c</sub> is termed as compensating voltage.</p>

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
