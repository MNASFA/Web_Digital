import './Blog.css';
import {BlogCard} from '../../Components/index';
import blog1 from '../../Components/assets/img/bg3.jpg';
import blog2 from '../../Components/assets/img/blog2.jpg';
import blog3 from '../../Components/assets/img/blog3.jpg';

const Blog = () => {
  return (
    <>
          <div className="blog_container reveal">
              <div className="container">
                  <div style={{textAlign:'center'}}><strong className="title">Blog</strong></div>
                  <div className="blog_cards">
                      <BlogCard image={blog1} titre='Coding Blog' paragraphe='We want quality writings on coding blog to be freely available to everyone. We want to empower authors to write elegant, modern coding blogs while retaining ownership of their work. The software community has thrived on sharing openly and honestly.'/>
                      <BlogCard image={blog2} titre='Design Blog' paragraphe='The Design Blog présente minutieusement une sélection de travaux provenant de studios et de graphistes du monde entier. Les sélections font bien honneur au slogan du site: « Ne soit pas juste un graphiste – mais soit un bon graphiste.'/>
                      <BlogCard image={blog3} titre='Editing Blog' paragraphe='Self editing is one of the most essential skills for bloggers to learn. You might want to hire an editor for your blog eventually, but in the early days, it s a significant expense with no guaranteed return on investment. But you still need to be publishing quality.'/>
                  </div>
              </div>
        </div>
    </>
  )
}

export default Blog