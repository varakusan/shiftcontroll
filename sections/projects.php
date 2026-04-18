<section class="Projects-module__projects" id="projects" data-scroll-section>
    <div class="Projects-module__header">
        <h2>Our Network & Capabilities</h2>
        <p>Delivering excellence across sectors</p>
    </div>

    <div class="Projects-module__wrapper">
        <div class="Projects-module__container" id="projects-container">
            <?php 
            $projects = [
                ["title" => "Pharma Logistics", "desc" => "Vaccine distribution network", "tags" => ["Cold Chain", "Pharma"]],
                ["title" => "Fresh Produce", "desc" => "Farm to fork delivery", "tags" => ["Agriculture", "Fresh"]],
                ["title" => "Dairy Supply", "desc" => "Milk & Dairy transport", "tags" => ["Dairy", "Time-Critical"]],
                ["title" => "Frozen Foods", "desc" => "Deep freeze storage & transit", "tags" => ["Frozen", "-18°C"]],
                ["title" => "Medical Devices", "desc" => "Sensitive equipment handling", "tags" => ["Healthcare", "Fragile"]],
                ["title" => "Last Mile", "desc" => "Urban distribution network", "tags" => ["Logistics", "Speed"]],
            ];
            foreach ($projects as $index => $project): 
                $bgHover = $index % 2 == 0 ? '#00f0ff20' : '#7000ff20';
            ?>
            <div class="Projects-module__card project-card">
                <div class="Projects-module__cardContent">
                    <div class="Projects-module__tags">
                        <?php foreach($project['tags'] as $tag): ?>
                            <span><?= $tag ?></span>
                        <?php endforeach; ?>
                    </div>
                    <h3><?= $project['title'] ?></h3>
                    <p><?= $project['desc'] ?></p>
                    <button class="Projects-module__btn">
                        View Details <i class="ph ph-arrow-right"></i>
                    </button>
                </div>
                <div class="Projects-module__bg" style="background: linear-gradient(45deg, <?= $bgHover ?>, transparent);"></div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
