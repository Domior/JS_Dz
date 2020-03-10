const btns = document.body.querySelectorAll('.size');
const body = document.body;

for (const btn of btns) {
    const styles = getComputedStyle(btn);

    btn.addEventListener('click', (e) => {
        body.style.background = styles.background;
    })
}