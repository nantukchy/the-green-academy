import React from 'react';
import blogImg from '../../assests/blogimg.jpeg';

const BlogPost = () => {
    return (
        <>        <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8">
            
                <article>
                    <header class="mb-4">
                        <h1 class="fw-bolder mb-1">Welcome to Blog Post!</h1>
                       
                            <div class="text-muted fst-italic mb-2">Posted on 5th October , 2021 by Nantu Chy</div>
                            <h2>Landscape Design</h2>
                    </header>
                    
                    <figure class="mb-4"><img class="img-fluid rounded" src={blogImg} alt="..." /></figure>
                    <section class="mb-5">
                            <p class="fs-5 mb-4">The landscape design phase consists of research, gathering ideas, and setting a plan. Design factors include objective qualities such as: climate and microclimates; topography and orientation, site drainage and groundwater recharge; municipal and resource building codes; soils and irrigation; human and vehicular access and circulation; recreational amenities (i.e., sports and water); furnishings and lighting; native plant habitat botany when present; property safety and security; construction detailing; and other measurable considerations Design factors also include subjective qualities such as genius loci (the special site qualities to emphasize); client's needs and preferences; desirable plants and elements to retain on site, modify, or replace, and that may be available for borrowed scenery from beyond; artistic composition from perspectives of both looking upon and observing from within; spatial development and definition – using lines, sense of scale, and balance and symmetry; plant palettes; and artistic focal points for enjoyment. There are innumerable other design factors and considerations brought to the complex process of designing a garden that is beautiful, well-functioning, and that thrives over time.</p>
                        <h2 class="fw-bolder mb-4 mt-5">Training</h2>
                        <p class="fs-5 mb-4">Historically, landscape designers trained by apprenticing—such as André Le Nôtre, who apprenticed with his father before designing the Gardens of Versailles—to accomplished masters in the field, with the titular name varying and reputation paramount for a career. The professional section of garden designers in Europe and the Americas went by the name 'Landscape Gardener.' In the 1890s, the distinct classification of landscape architect was created, with educational and licensing test requirements for using the title legally. Beatrix Farrand, the sole woman in the founding group, refused the title preferring Landscape Gardener. Matching the client and technical needs of a project, and the appropriate practitioner with talent, legal qualifications, and experienced skills, surmounts title nomenclature.</p>
                        
                    </section>
                </article>

            </div>

            <div class="col-lg-4">

                <div class="card mb-4">
                    <div class="card-header">Search for old post</div>
                    <div class="card-body">
                        <div class="input-group">
                            <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                            <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                        </div>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-header">Categories</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6">
                                <ul class="list-unstyled mb-0">
                                    <li><a href="#!">Landscape</a></li>
                                    <li><a href="#!">Gardening</a></li>
                                    <li><a href="#!">Fountain design</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <ul class="list-unstyled mb-0">
                                    <li><a href="#!">Planting</a></li>
                                    <li><a href="#!">Eco System</a></li>
                                    <li><a href="#!">Indoor plant</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-4">
                        <div class="card-header">Best Post</div>
                        <h1>Exterior Lighting course </h1>
                        <div class="text-muted fst-italic mb-2">Posted on 5th October , 2021 by Nantu Chy</div>
                    <div class="card-body">Outdoor spaces sometimes get overlooked after the sun goes down,” said Memphis interior designer Sean Anderson, alluding to such lame attempts at illumination. This spring, however, as we prepare to host en plein air again, why not tackle outdoor lighting—especially if you’ve upgraded everything else? Beyond a wish to enjoy their private plot at night, homeowners light landscapes “so that when you’re inside the house you can see the garden and not just a black hole,” said Ive Haugeland, founding principal of Shades of Green, a landscape architecture firm in Sausalito, Calif.

                    The best way to banish murky shadows is to borrow the sort of layered lighting scheme found in professionally designed living rooms. In simplest terms, you want three tiers. Start with the highest level, via lofty lanterns or up-lighting that draws eyes skyward or even chandeliers (yes, weatherproof versions exist; see “Worth Wiring”). Next fill in the midrange with sconces, illuminated plants or sculptures and tabletop portable lanterns. And don’t forget low-level illumination—that is path, understep and underseat lighting.

</div>
                </div>
            </div>
        </div>
    </div>
            </>
    );
};

export default BlogPost;