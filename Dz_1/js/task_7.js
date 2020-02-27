const capacityFlashDrive = prompt('TASK_7 Enter USB flash drive capacity(,Gb): ')

calculateFiles = (capacityFlashDrive) => {
    const mbInGb = 1024;
    const fileMemorySize = 820;
    
    const mbToGb = fileMemorySize / mbInGb
    const filesInFleshDrive = capacityFlashDrive / mbToGb
    
    alert(`${Math.floor(filesInFleshDrive)} complete files can be moved to Flesh Drive`)
}
calculateFiles(capacityFlashDrive)