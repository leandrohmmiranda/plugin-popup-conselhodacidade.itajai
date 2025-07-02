<?php
/*
Plugin Name: Reuniões do Conselho
Description: Exibe um popup com detalhes de reuniões do conselho.
Version: 1.0
Author: Leandro Miranda
*/

function rc_enqueue_scripts() {
    wp_enqueue_style('rc-style', plugin_dir_url(__FILE__) . 'style.css');
    wp_enqueue_script('rc-script', plugin_dir_url(__FILE__) . 'script.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'rc_enqueue_scripts');

function rc_add_popup_html() {
?>
    <div id="rc-popup-overlay" class="rc-hidden">
        <div id="rc-popup">
            <button id="rc-close">&times;</button>
            <h1 id="rc-popup-main-title">Reunião XXX</h1>
            <h2 id="rc-popup-title"></h2>
            <div class="rc-content">
                <div class="rc-left">
                    <p><strong>Data:</strong> <span id="rc-popup-date"></span></p>
                    <p><strong>Modalidade:</strong> <span id="rc-popup-mode"></span></p>
                </div>
                <div class="rc-right">
                    <p><strong>Horário:</strong> <span id="rc-popup-time"></span></p>
                    <p><strong>Status:</strong> <span id="rc-popup-status"></span></p>
                </div>
            </div>
            <div class="rc-documents">
                <p><strong>Documentos:</strong></p>
                <a id="rc-popup-doc" href="#" target="_blank"></a>
            </div>
        </div>
    </div>
<?php
}
add_action('wp_body_open', 'rc_add_popup_html');
?>