/* Floating Table of Contents for post pages */
(function () {
    var content = document.querySelector('.gh-content');
    var toc = document.querySelector('.gh-toc');

    if (!content || !toc) return;

    var headings = content.querySelectorAll('h2, h3');
    if (headings.length < 2) {
        toc.remove();
        return;
    }

    var list = document.createElement('ul');
    list.className = 'gh-toc-list';

    headings.forEach(function (heading, i) {
        if (!heading.id) {
            heading.id = 'heading-' + i;
        }

        var li = document.createElement('li');
        li.className = 'gh-toc-item' + (heading.tagName === 'H3' ? ' is-h3' : '');

        var a = document.createElement('a');
        a.className = 'gh-toc-link';
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;

        a.addEventListener('click', function (e) {
            e.preventDefault();
            heading.scrollIntoView({behavior: 'smooth', block: 'start'});
            history.replaceState(null, '', '#' + heading.id);
        });

        li.appendChild(a);
        list.appendChild(li);
    });

    toc.appendChild(list);

    var links = toc.querySelectorAll('.gh-toc-link');
    var activeIndex = -1;

    function updateActive() {
        var newIndex = -1;

        for (var i = headings.length - 1; i >= 0; i--) {
            if (headings[i].getBoundingClientRect().top <= 100) {
                newIndex = i;
                break;
            }
        }

        if (newIndex !== activeIndex) {
            if (activeIndex >= 0 && links[activeIndex]) {
                links[activeIndex].classList.remove('is-active');
            }
            if (newIndex >= 0 && links[newIndex]) {
                links[newIndex].classList.add('is-active');
            }
            activeIndex = newIndex;
        }
    }

    var ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                updateActive();
                ticking = false;
            });
            ticking = true;
        }
    });

    updateActive();
})();
