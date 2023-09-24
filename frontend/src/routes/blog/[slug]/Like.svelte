<script>
    const fillClass = 'material-symbols-outlined-fill';
    const getLikeButton = () => document.getElementById('like-button');
    const getDislikeButton = () => document.getElementById('dislike-button');

    const unmark = (button) => button.className = button.className.replace(fillClass, "");

    const toggle = (button) => {
        if (button.className.includes(fillClass))
            unmark(button);
        else
            button.className = button.className + " " + fillClass;
    }

    const handleDislikeButton = () => {
        toggle(getDislikeButton());
        unmark(getLikeButton());
    }

    const handleLikeButton = () => {
        toggle(getLikeButton());
        unmark(getDislikeButton());
    }
</script>
<style>
    .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24
    }

    .material-symbols-outlined-fill {
        font-variation-settings: 'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 24
    }
</style>

<div>
    <button on:click={handleLikeButton}>
                    <span id="like-button" class="material-symbols-outlined hover:text-gray-300">
                    thumb_up
                    </span>
    </button>
    <button on:click={handleDislikeButton}>
                    <span id="dislike-button" class="material-symbols-outlined hover:text-gray-300">
                    thumb_down
                    </span>
    </button>
</div>