import React from 'react'

const PLACEHOLDER = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in efficitur eros. Etiam id libero lorem. Sed et rhoncus nulla. In at ante id tortor lobortis dictum at eu tortor.'
const PLACEHOLDER_PARAGRAPH = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in efficitur eros. Etiam id libero lorem. Sed et rhoncus nulla. In at ante id tortor lobortis dictum at eu tortor. Nullam tincidunt volutpat enim et rutrum. Nulla a nulla iaculis, pharetra est ut, elementum sapien. Integer sit amet nisl eros.

Suspendisse enim enim, placerat interdum ex at, euismod tempus ligula. Fusce erat tortor, bibendum eget fringilla hendrerit, mollis eget elit. Phasellus fermentum eros sed diam convallis sagittis. Maecenas sapien velit, aliquet et tempor eget, posuere eget velit. Fusce pretium ullamcorper sapien, eu pretium nisi posuere quis. Vestibulum pretium viverra cursus. Curabitur velit ante, faucibus sit amet malesuada sed, consequat dignissim leo. Pellentesque feugiat sapien diam, a blandit nunc tincidunt at. Maecenas finibus eleifend rutrum. Vivamus vitae augue ut tellus semper iaculis ut vel urna. Fusce lacus nisi, suscipit egestas diam nec, convallis dignissim orci. Quisque vitae dolor ornare velit feugiat mollis. Donec quis justo et dolor dapibus accumsan.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean consequat, felis quis vehicula sollicitudin, justo erat finibus lacus, a scelerisque est elit sit amet odio. Aliquam ut dapibus ante. Morbi eget neque nec mi laoreet bibendum at eget lorem. Quisque tempor nec dui eget tempor. Proin sodales quam metus, nec faucibus nisi commodo non. Nullam non lacus viverra, auctor turpis non, commodo odio. Sed felis sem, bibendum non auctor non, convallis sed risus. Nam lacinia, sem ut suscipit elementum, eros diam placerat felis, vitae convallis ante ante vitae erat.

Sed dapibus, erat id placerat consectetur, sem felis lacinia arcu, eu bibendum mi urna a risus. Aliquam interdum placerat rutrum. Morbi nunc ligula, venenatis eu vehicula vitae, dignissim et nisi. Suspendisse et mauris non ex viverra iaculis sit amet quis sem. Aenean elementum id velit non semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur at elit eget sapien consectetur finibus. Sed tellus enim, pulvinar egestas sodales id, tincidunt porttitor nulla. Suspendisse tincidunt ullamcorper varius. Pellentesque quis risus mattis, malesuada arcu non, semper urna. Cras purus massa, semper vel feugiat ut, ultricies ac diam. Suspendisse eleifend vitae orci sit amet viverra. Aliquam sit amet diam eros.`

export default () => (
    <div id="about" class="content-section">
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-lg-7">
        <h1>ABOUT</h1>
        <p class="lead">{PLACEHOLDER} </p>
        <p>
            {PLACEHOLDER_PARAGRAPH}
        </p>
        <blockquote>
          <p>Remember to use <mark><em>Read-Search-Ask</em></mark> if you get stuck.</p>
        </blockquote>
        <p>When you are finished, click the <strong>"I've completed this challenge"</strong> button and include a link to your CodePen. If you pair programmed, you should also include the Free Code Camp username of your pair.</p>
      </div>
      <div class="col-sm-4 col-lg-5 hidden-xs">
        <img src="http://www.joshuanava.biz/engineering-3/images/1843_202_418-orthographic-assembly-drawing.jpg" alt="" class="pull-right img-responsive" />
      </div>
    </div>
  </div>
</div>
)