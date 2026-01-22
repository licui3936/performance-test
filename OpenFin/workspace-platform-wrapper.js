// Wrapper to export workspace-platform for browser use
import * as WorkspacePlatform from '@openfin/workspace-platform';

// Export to window for browser access
if (typeof window !== 'undefined') {
    window.WorkspacePlatform = WorkspacePlatform;
}

export default WorkspacePlatform;
