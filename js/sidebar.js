document.addEventListener('DOMContentLoaded', function() {
    // Get the sidebar toggle buttons
    const sidebarCollapseOpen = document.getElementById('sidebarCollapseOpen');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');

    // Toggle sidebar on mobile
    sidebarCollapseOpen.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    sidebarCollapse.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleButton = sidebarCollapseOpen.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggleButton && window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    });
}); 