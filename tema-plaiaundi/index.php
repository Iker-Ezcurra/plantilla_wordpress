<?php get_header(); ?>

    <main>

        <?php 
        $args = array(
            'post_type' => 'post',
            'posts_per_page' => 10
        );
        $blog_query = new WP_Query($args);

        if ($blog_query->have_posts()) { 
            while ($blog_query->have_posts()) { 
                $blog_query->the_post(); 
        ?>

                <article>

                    <?php if (has_post_thumbnail()) { ?>
                        <?php the_post_thumbnail(); ?>
                    <?php } ?>

                    <h2>
                        <a href="<?php the_permalink(); ?>">
                            <?php the_title(); ?>
                        </a>
                    </h2>

                    <p>
                        Publicado por <?php the_author(); ?>
                        el <?php echo get_the_date(); ?>
                    </p>

                    <p>
                        Categorías: <?php the_category(', '); ?>
                    </p>

                    <?php the_excerpt(); ?>

                </article>

            <?php } ?>
            
            <?php wp_reset_postdata(); ?>

        <?php } else { ?>

            <p>No hay entradas disponibles.</p>

        <?php } ?>

    </main>

</body>

</html>
