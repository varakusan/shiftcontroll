<footer class="Footer-module__footer" data-scroll-section>
    <div class="Footer-module__container">
        <div class="Footer-module__top">
            <div class="Footer-module__brand">
                <h3>SHIFT <span>CONTROLL</span></h3>
                <p>Redefining Cold Chain Logistics</p>
            </div>

            <div class="Footer-module__socials">
                <a href="#"><i class="ph ph-linkedin-logo" style="font-size: 24px;"></i></a>
                <a href="#"><i class="ph ph-twitter-logo" style="font-size: 24px;"></i></a>
                <a href="#"><i class="ph ph-instagram-logo" style="font-size: 24px;"></i></a>
                <a href="#"><i class="ph ph-facebook-logo" style="font-size: 24px;"></i></a>
            </div>
        </div>

        <div class="Footer-module__bottom">
            <p>&copy; <?php echo date('Y'); ?> Shift Controll. All rights reserved.</p>
            <div class="Footer-module__links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
    </div>

    <div class="Footer-module__particles">
        <?php for($i = 0; $i < 20; $i++): ?>
            <?php 
                $left = rand(0, 100);
                $delay = rand(0, 50) / 10;
                $duration = 5 + (rand(0, 50) / 10);
            ?>
            <div class="Footer-module__particle" style="left: <?= $left ?>%; animation-delay: <?= $delay ?>s; animation-duration: <?= $duration ?>s;"></div>
        <?php endfor; ?>
    </div>
</footer>

<!-- External Scripts -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css">
<!-- Main Application Script -->
<script src="assets/js/main.js"></script>
</body>
</html>
