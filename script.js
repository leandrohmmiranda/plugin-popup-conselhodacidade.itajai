jQuery(document).ready(function ($) {
    $('.rc-open-popup').on('click', function () {
        const title = $(this).data('title');
        const date = $(this).data('date');
        const time = $(this).data('time');
        const mode = $(this).data('mode');
        const status = $(this).data('status');
        const doc = $(this).data('doc');

        $('#rc-popup-title').text(title);
        $('#rc-popup-date').text(date);
        $('#rc-popup-time').text(time);
        $('#rc-popup-mode').text(mode);
        $('#rc-popup-status').text(status);
        $('#rc-popup-doc').text('Ver Documento').attr('href', doc);

        $('#rc-popup-overlay').removeClass('rc-hidden');
    });

    $('.e-n-accordion-item').on('click', function () {
        const title = $(this).find('.e-n-accordion-item-title-text').text().trim();
        const date = $(this).data('date') || 'Data não informada';
        const time = $(this).data('time') || 'Horário não informado';
        const mode = $(this).data('mode') || 'Modalidade não informada';
        const status = $(this).data('status') || 'Status não informado';
        const doc = $(this).data('doc') || '#';

        $('#rc-popup-title').text(title);
        $('#rc-popup-date').text(date);
        $('#rc-popup-time').text(time);
        $('#rc-popup-mode').text(mode);
        $('#rc-popup-status').text(status);
        $('#rc-popup-doc').text('Ver Documento').attr('href', doc);

        $('#rc-popup-overlay').removeClass('rc-hidden');
    });

    $('#rc-close').on('click', function () {
        $('#rc-popup-overlay').addClass('rc-hidden');
    });
});
